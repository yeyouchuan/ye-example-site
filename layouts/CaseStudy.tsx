import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import type { Post } from "@/types";

const PostLayout: React.FC<{
  post: Post;
  renderedPostContent: string;
}> = ({ post, renderedPostContent }) => {
  return (
    <Container showHomeLink>
      <article className="max-w-screen-lg mx-auto relative min-h-screen mb-24">
        <h1 className="font-serif p-0 m-0 text-charcoal text-[1.953rem] leading-tight mt-32 mb-8 max-w-lg mx-auto text-center">
          {post.data.title}
        </h1>
        <div className="flex flex-row gap-8 text-xs mb-16 text-center max-w-screen-md mx-auto">
          {post?.data?.date && (
            <div className="flex-1  hidden md:block">
              <small className="text-gray">Publish date</small>
              <span className="block">{post.data.date}</span>
            </div>
          )}

          {post?.data?.skills && (
            <div className="flex-1">
              <small className="text-gray">Skills</small>
              <span className="block">{post.data.skills}</span>
            </div>
          )}

          {post?.data?.link && (
            <div className="flex-1">
              <small className="text-gray">Link</small>
              <Link
                href={post.data.link}
                className="block underline w-fit mx-auto"
              >
                Visit site
              </Link>
            </div>
          )}
        </div>
        <div
          className="flex flex-col gap-8"
          dangerouslySetInnerHTML={{ __html: renderedPostContent }}
        />
      </article>
    </Container>
  );
};

export default PostLayout;
