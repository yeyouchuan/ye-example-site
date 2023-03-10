import React from "react";
import { promises as fs } from "fs";
import path from "path";
import dayjs from "dayjs";
import matter from "gray-matter";
import BlogLayout from "@/layouts/Blog";
import type { Post } from "@/types/index";
import SEO from "@/components/SEO";

const POSTS_DIR = "_posts";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), POSTS_DIR);
  const files = await fs.readdir(postsDir);

  const postPaths = files.filter((file) => {
    const ext = path.extname(file);
    return ext === ".md";
  });

  const posts: Post[] = await Promise.all(
    postPaths.map(async (file: string) => {
      const contents = await fs.readFile(path.join(postsDir, file), "utf8");
      const parsed = matter(contents);

      const post = {
        content: parsed.content,
        data: parsed.data,
      } as Post;

      return post;
    })
  );

  const sortedPosts = posts.sort((a: Post, b: Post) =>
    dayjs(a.data.date).isAfter(dayjs(b.data.date)) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <SEO />
      <BlogLayout posts={posts} />
    </>
  );
}
