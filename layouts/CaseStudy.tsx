import React, { useMemo } from "react";
import Link from "next/link";
import readingTime from "reading-time";

import Container from "../components/Container";
import { Post } from "../pages";

const getMinutesToRead = (text: string): number => {
  const { minutes } = readingTime(text);

  return Math.round(minutes);
};

const PostLayout = ({
  post,
  renderedPostContent,
}: {
  post: Post;
  renderedPostContent: string;
}) => {
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
              <p>{post.data.date}</p>
            </div>
          )}

          {post?.data?.skills && (
            <div className="flex-1 hidden md:block">
              <small className="text-gray">Skills</small>
              <p>{post.data.skills}</p>
            </div>
          )}

          {post?.data?.link && (
            <div className="flex-1 hidden md:block">
              <small className="text-gray">Link</small>
              <Link
                href={post.data.link}
                className="block border-b border-gray-dark w-fit mx-auto"
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
