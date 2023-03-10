import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import classnames from "classnames";
import Container from "@/components/Container";
import FilterBar from "@/components/FilterBar";
import PostCard from "@/components/PostCard";
import { CATEGORIES } from "@/types/index";
import type { Post } from "@/types/index";

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
          Hey, I’m Noah Buscher: a web developer and designer based in Palm
          Springs, CA. Currently working at{" "}
          <Link
            href="https://dave.com"
            target="_blank"
            rel="noreferrer"
            className="border-b border-charcoal"
          >
            Dave
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
              <span className="text-xs text-gray block">
                No posts in {selectedFilter}
                {selectedFilter !== "Work" && "s"} (yet)
              </span>
            )}
            <AnimatePresence>
              {getFilteredPosts(posts, selectedFilter).map(
                (post: any, postIndex: number) => (
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
                      <Image
                        src={post.data.images}
                        alt={post.data.caption}
                        width="0"
                        height="0"
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        className="w-full h-full object-cover"
                        priority={postIndex <= 1}
                        quality={40}
                      />
                    )}

                    {post.data.type === "Work" && (
                      <Image
                        src={post.data.images}
                        alt={post.data.caption}
                        width="0"
                        height="0"
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        className="w-full h-full object-cover"
                        priority={postIndex <= 1}
                        quality={40}
                      />
                    )}

                    {post.data.type === "Post" && (
                      <div className="p-4 relative flex flex-col gap-4">
                        <h2 className="flex-1 flex-grow-0 text-lg text-charcoal flex-1 flex-grow-0 font-serif">
                          {post.data.title}
                        </h2>
                        <p
                          className={classnames(
                            "-1 flex-grow text-xs text-ellipsis flex-1 flex-grow text-gray-dark",
                            { "lg:max-w-[80%]": !isGrid }
                          )}
                        >
                          {post.data.excerpt}
                        </p>

                        {!isGrid && (
                          <Link
                            href={`/posts/${post.data.slug}`}
                            className="text-charcoal text-xs w-fit px-2.5 py-1.5 text-xs border rounded-full ml-auto border-gray"
                          >
                            Read more ↗
                          </Link>
                        )}
                      </div>
                    )}
                  </PostCard>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
