import React from "react";
import PostLayout from "@/layouts/Post";
import SEO from "@/components/SEO";
import { renderMarkdownToHTML } from "@/utils/markdown";
import { getPostBySlug, getSlugsByType, nextifySlugs } from "@/utils/posts";
import type { Post } from "@/types";

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPostBySlug(params.slug);
  const renderedPostContent = renderMarkdownToHTML(post?.content!);

  return {
    props: {
      post,
      renderedPostContent,
    },
  };
};

export const getStaticPaths = async () =>
  nextifySlugs(await getSlugsByType("Post"));

const Post: React.FC<{
  post: Post;
  renderedPostContent: string;
}> = ({ post, renderedPostContent }) => (
  <>
    <SEO
      title={`${post.data.title} | Noah Buscher`}
      description={post.data.excerpt}
      image={`https://noahbuscher.com${post.data.image}`}
    />
    <PostLayout post={post} renderedPostContent={renderedPostContent} />
  </>
);

export default Post;
