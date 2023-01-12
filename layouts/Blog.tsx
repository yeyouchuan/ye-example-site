import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import classnames from "classnames";

import Container from "../components/Container";
import FilterBar from "../components/FilterBar";
import PostCard, { CATEGORIES } from "../components/PostCard";
import { Post } from "../pages";

const getFilteredPosts = (posts: Post[], filter: any) =>
  filter === ""
    ? posts
    : posts.filter((post: any) => post.data.type === filter);

const Blog = ({ posts }: any) => {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const containerClasses = classnames("gap-4", {
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": isGrid,
    "flex flex-col": !isGrid,
  });

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto flex flex-col mb-8 md:mb-16">
        <h1 className="font-serif flex-1 flex-grow-0 p-0 m-0 text-charcoal text-xl max-w-md mt-32 mb-12 md:mb-24">
          I’m a web developer and designer based in Palm Springs, currently on
          the infra team at{" "}
          <Link
            href="https://dave.com"
            target="_blank"
            rel="noreferrer"
            className="border-b border-charcoal"
          >
            Dave*
          </Link>
          .
        </h1>

        <div className="flex flex-col gap-6 relative flex-grow flex-1">
          <FilterBar
            selectedFilter={selectedFilter}
            onSelectFilter={(filter: string) => setSelectedFilter(filter)}
            onLayoutToggle={() => setIsGrid((grid) => !grid)}
            isGrid={isGrid}
          />

          <div className={containerClasses}>
            {getFilteredPosts(posts, selectedFilter).length === 0 && (
              <p className="text-xs text-gray">
                No posts in {selectedFilter}
                {selectedFilter !== "Work" && "s"} (yet)
              </p>
            )}
            <AnimatePresence>
              {getFilteredPosts(posts, selectedFilter).map((post: any) => (
                <PostCard
                  key={post.data.slug}
                  category={CATEGORIES[post.data.type]}
                  tile={isGrid}
                  timestamp={post.data.date}
                  location={post.data.location}
                  caption={post.data.caption}
                  slug={post.data.slug}
                  type={post.data.type}
                >
                  {post.data.type === "Photo" && (
                    <img
                      src={post.data.images}
                      alt={post.data.caption}
                      className="object-cover h-full w-full"
                    />
                  )}

                  {post.data.type === "Post" && (
                    <div className="p-4 relative flex flex-col gap-4">
                      <h2 className="flex-1 flex-grow-0 text-lg text-charcoal flex-1 flex-grow-0 font-serif">
                        {post.data.title}
                      </h2>
                      <p className="flex-1 flex-grow text-xs text-ellipsis flex-1 flex-grow">
                        {post.data.excerpt}
                      </p>

                      {!isGrid && (
                        <Link
                          href={`/posts/${post.data.slug}`}
                          className="underline text-charcoal text-xs w-fit ml-auto"
                        >
                          Read more
                        </Link>
                      )}
                    </div>
                  )}
                </PostCard>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
