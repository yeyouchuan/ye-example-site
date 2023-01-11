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
        <h1 className="p-0 m-0 text-charcoal text-[1.953rem] leading-tight mt-32 mb-8 max-w-lg mx-auto text-center">
          {post.data.title}
        </h1>
        <div className="flex flex-row gap-8 text-xs mb-24 text-center max-w-screen-md mx-auto">
          <div className="flex-1">
            <small className="text-gray">Publish date</small>
            <p>{post.data.date}</p>
          </div>
          <div className="flex-1 hidden md:block">
            <small className="text-gray">Location posted</small>
            <p>{post.data.location}</p>
          </div>
          <div className="flex-1">
            <small className="text-gray">Read time</small>
            <p>
              {timeToRead} minute{timeToRead > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex-1 hidden md:block">
            <small className="text-gray">Author</small>
            <p>{post.data.author}</p>
          </div>
        </div>
        <div
          className="flex flex-col gap-12 justify-center"
          dangerouslySetInnerHTML={{ __html: renderedPostContent }}
        />
      </article>
    </Container>
  );
};

export default PostLayout;
