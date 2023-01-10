import React from "react";

import { promises as fs } from "fs";
import path from "path";

import dayjs from "dayjs";
import matter from "gray-matter";

const POSTS_DIR = "_posts";

import BlogLayout from "../layouts/Blog";

export async function getStaticProps() {
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

  const sortedPosts = posts.sort((a: any, b: any) =>
    dayjs(a.data.date).isAfter(dayjs(b.data.date)) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
}

export default function Home({ posts }: any) {
  return <BlogLayout posts={posts} />;
}
