import React from "react";
import dayjs from "dayjs";
import BlogLayout from "@/layouts/Blog";
import SEO from "@/components/SEO";
import { getPosts } from "@/utils/posts";
import type { Post } from "@/types";

export const getStaticProps = async () => {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a: Post, b: Post) =>
    dayjs(a.data.date).isAfter(dayjs(b.data.date)) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

const Home: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <>
    <SEO />
    <BlogLayout posts={posts} />
  </>
);

export default Home;
