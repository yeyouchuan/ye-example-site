import React from "react";
import CaseStudyLayout from "@/layouts/CaseStudy";
import SEO from "@/components/SEO";
import { getPostBySlug, getSlugsByType, nextifySlugs } from "@/utils/posts";
import { renderMarkdownToHTML } from "@/utils/markdown";
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
  nextifySlugs(await getSlugsByType("Work"));

const Post: React.FC<{
  post: Post;
  renderedPostContent: string;
}> = ({ post, renderedPostContent }) => (
  <>
    <SEO
      title={`${post.data.title} | Noah Buscher`}
      description={post.data.caption}
      image={post.data.image}
    />
    <CaseStudyLayout post={post} renderedPostContent={renderedPostContent} />
  </>
);

export default Post;
