import React from "react";
import Head from "next/head";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

import PostLayout from "../../layouts/Post";
import { renderMarkdownToHTML } from "../../utils/markdown";
import { Post } from "../";

// @todo move to config
const POSTS_DIR = "_posts";

export async function getStaticProps({ params }: { params: { slug: string } }) {
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
  return (
    <>
      <Head>
        <title>{`${post.data.title} | Noah Buscher`}</title>
        <meta name="description" content={post.data.excerpt} />
        <meta
          property="og:title"
          content={`${post.data.title} | Noah Buscher`}
        />
        <meta property="og:description" content={post.data.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://noahbuscher.com/posts/${post.data.slug}`}
        />
        <meta
          name="twitter:title"
          content={`${post.data.title} | Noah Buscher`}
        />
        <meta name="twitter:description" content={post.data.excerpt} />
        {post.data.images ? (
          <>
            <meta property="og:image" content={post.data.images} />
            <meta name="twitter:image" content={post.data.images} />
          </>
        ) : (
          <>
            <meta
              property="og:image"
              content="https://noahbuscher.com/social-image.jpg"
            />
            <meta
              name="twitter:image"
              content="https://noahbuscher.com/social-image.jpg"
            />
          </>
        )}
      </Head>
      <PostLayout post={post} renderedPostContent={renderedPostContent} />
    </>
  );
};

export default Post;
