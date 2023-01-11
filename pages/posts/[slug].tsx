import React from "react";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

import PostLayout from "../../layouts/Post";
import { renderMarkdownToHTML } from "../../utils/markdown";
import { Post } from "../";

// @todo move to config
const POSTS_DIR = "_posts";

export async function getStaticProps({ params }: any) {
  const postsDir = path.join(process.cwd(), POSTS_DIR);
  const files = await fs.readdir(postsDir);

  const postPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const posts = await Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(postsDir, file), "utf8");
      const parsed = matter(contents);

      return {
        content: parsed.content,
        data: parsed.data,
      };
    })
  );

  const post = posts.find((p) => p?.data?.slug === params.slug);

  const renderedPostContent = renderMarkdownToHTML(post?.content!);

  return {
    props: {
      post,
      renderedPostContent,
    },
  };
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), POSTS_DIR);
  const files = await fs.readdir(postsDir);

  const postPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const posts = await Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(postsDir, file), "utf8");
      const parsed = matter(contents);

      return {
        content: parsed.content,
        data: parsed.data,
      };
    })
  );

  const paths = posts
    .filter((post) => post?.data?.type === "Post")
    .map((post) => ({
      params: { slug: post?.data?.slug },
    }));

  return {
    paths,
    fallback: false,
  };
}

const Post = ({
  post,
  renderedPostContent,
}: {
  post: Post;
  renderedPostContent: string;
}) => {
  return <PostLayout post={post} renderedPostContent={renderedPostContent} />;
};

export default Post;
