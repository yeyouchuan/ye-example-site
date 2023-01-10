import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import classnames from "classnames";

import Container from "../components/Container";
import FilterBar from "../components/FilterBar";
import PostLayout, { CATEGORIES } from "../components/PostLayout";

const getFilteredPosts = (posts: any, filter: any) =>
  filter === ""
    ? posts
    : posts.filter((post: any) => post.data.type === filter);

const Blog = ({ posts }: any) => {
  const [isGrid, setIsGrid] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const containerClasses = classnames("gap-4", {
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": isGrid,
    "flex flex-col": !isGrid,
  });

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto flex flex-col min-h-screen">
        <h1 className="flex-1 flex-grow-0 p-0 m-0 text-charcoal text-xl max-w-md mt-32 mb-24">
          Web developer and designer, currently developer experience wrangler at
          Dave.
        </h1>

        <div className="flex flex-col gap-8 relative flex-grow flex-1">
          <FilterBar
            selectedFilter={selectedFilter}
            onSelectFilter={(filter: string) => setSelectedFilter(filter)}
            onLayoutToggle={() => setIsGrid((grid) => !grid)}
          />

          <div className={containerClasses}>
            {getFilteredPosts(posts, selectedFilter).length === 0 && (
              <p className="text-xs text-gray">Nothing to see here (yet)</p>
            )}
            <AnimatePresence>
              {getFilteredPosts(posts, selectedFilter).map((post: any) => (
                <PostLayout
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
                      className="object-cover h-full w-full"
                    />
                  )}

                  {post.data.type === "Post" && (
                    <div className="p-8 relative flex flex-col gap-4">
                      <h2 className="text-xl text-charcoal flex-1 flex-grow-0">
                        {post.data.title}
                      </h2>
                      <p className="text-xs text-ellipsis flex-1 flex-grow overflow-hidden whitespace-nowrap">
                        {post.data.excerpt}
                      </p>

                      {!isGrid && (
                        <Link
                          href={`/posts/${post.data.slug}`}
                          className="rounded-full transition-all hover:bg-accent hover:border-accent cursor-pointer px-5 py-2 text-charcoal text-xs w-fit ml-auto bg-gray-light"
                        >
                          Read more
                        </Link>
                      )}
                    </div>
                  )}
                </PostLayout>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex-1 flex flex-grow w-3/4 items-end justify-start text-center text-sm text-gray opacity-80">
            <img src="/trees.svg" className="w-[200px] h-auto" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
