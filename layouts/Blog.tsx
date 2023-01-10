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
      <div className="max-w-screen-lg mx-auto min-h-screen">
        <h1 className="p-0 m-0 text-gray-dark text-xl max-w-md mt-32 mb-24">
          Web developer and designer, currently developer experience wrangler at
          Dave.
        </h1>

        <div className="flex flex-col gap-8 relative ">
          <FilterBar
            selectedFilter={selectedFilter}
            onSelectFilter={(filter: string) => setSelectedFilter(filter)}
            onLayoutToggle={() => setIsGrid((grid) => !grid)}
          />

          <div className={containerClasses}>
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
                      <h2 className="text-xl text-gray-dark">
                        {post.data.title}
                      </h2>
                      <p className="text-xs text-ellipsis">
                        {post.data.excerpt}
                      </p>

                      {!isGrid && (
                        <Link
                          href={`/posts/${post.data.slug}`}
                          className="rounded-full transition-all hover:bg-accent hover:border-accent cursor-pointer px-5 py-2 text-gray-dark text-xs w-fit ml-auto bg-gray-light"
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
          <div className="w-full flex flex-row items-end gap-4">
            <div className="w-3/4 h-[160px] text-center text-sm text-gray opacity-80 flex items-end justify-start">
              <img src="/trees.svg" className="w-[200px] h-auto" />
            </div>

            <div className="bg-white w-1/4 mb-4 flex flex-col gap-7"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
