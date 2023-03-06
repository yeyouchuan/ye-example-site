import React from "react";
import Head from "next/head";
import { promises as fs } from "fs";
import path from "path";
import dayjs from "dayjs";
import matter from "gray-matter";

import BlogLayout from "../layouts/Blog";
import { Category } from "../components/PostCard";

const POSTS_DIR = "_posts";

export type Post = {
  content: string;
  data: {
    author: string;
    excerpt?: string;
    caption?: string;
    date: string;
    images?: string;
    location?: string;
    slug: string;
    title?: string;
    type?: Category;
    skills?: string;
    link?: string;
  };
};

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
  const meta = {
    title: "Noah Buscher - Developer",
    description: "Web developer and designer based in Palm Springs, CA.",
  };

  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta property="og:title" content={meta.title} key="og-title" />
        <meta name="twitter:title" content={meta.title} key="twitter-title" />
        <meta name="description" content={meta.description} key="description" />
        <meta
          name="og:description"
          content={meta.description}
          key="og-description"
        />
        <meta
          name="twitter:description"
          content={meta.description}
          key="twitter-description"
        />
      </Head>
      <BlogLayout posts={posts} />
    </>
  );
}
