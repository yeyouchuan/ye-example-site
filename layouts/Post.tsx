import React, { useMemo } from "react";
import readingTime from "reading-time";
import Container from "@/components/Container";
import type { Post } from "@/types";

const getMinutesToRead = (text: string): number => {
  const { minutes } = readingTime(text);

  return Math.round(minutes);
};

const PostLayout: React.FC<{
  post: Post;
  renderedPostContent: string;
}> = ({ post, renderedPostContent }) => {
  const timeToRead: number = useMemo(
    () => getMinutesToRead(post.content),
    [post.content]
  );

  return (
    <Container showHomeLink>
      <article className="max-w-screen-lg mx-auto relative min-h-screen mb-24">
        <h1 className="font-serif p-0 m-0 text-charcoal text-[1.953rem] leading-tight mt-32 mb-8 max-w-lg mx-auto text-center">
          {post.data.title}
        </h1>
        <div className="flex flex-row gap-8 text-xs mb-16 text-center max-w-screen-md mx-auto">
          {post?.data?.date && (
            <div className="flex-1">
              <small className="text-gray">Publish date</small>
              <span className="block">{post.data.date}</span>
            </div>
          )}

          {post?.data?.location && (
            <div className="flex-1 hidden md:block">
              <small className="text-gray">Location posted</small>
              <span className="block">{post.data.location}</span>
            </div>
          )}

          <div className="flex-1">
            <small className="text-gray">Read time</small>
            <span className="block">
              {timeToRead} minute{timeToRead > 1 ? "s" : ""}
            </span>
          </div>

          {post?.data?.author && (
            <div className="flex-1 hidden md:block">
              <small className="text-gray">Author</small>
              <span className="block">{post.data.author}</span>
            </div>
          )}
        </div>
        <article
          className="flex flex-col gap-8"
          dangerouslySetInnerHTML={{ __html: renderedPostContent }}
        />
      </article>
    </Container>
  );
};

export default PostLayout;
