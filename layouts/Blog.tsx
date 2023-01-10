import React, { useState } from "react";
import classnames from "classnames";

import Container from "../components/Container";
import FilterBar from "../components/FilterBar";
import PostLayout, { CATEGORIES } from "../components/PostLayout";

const BlogLayout = ({}) => {
  const [isGrid, setIsGrid] = useState(false);

  const containerClasses = classnames("gap-4", {
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": isGrid,
    "flex flex-col": !isGrid,
  });

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="p-0 m-0 text-gray-dark text-xl max-w-md mt-32 mb-24">
          Web developer and designer, currently developer experience wrangler at
          Dave.
        </h1>

        <div className="flex flex-col gap-8 relative">
          <FilterBar onLayoutToggle={() => setIsGrid((grid) => !grid)} />

          <div className={containerClasses}>
            <PostLayout
              category={CATEGORIES.Photo}
              tile={isGrid}
              timestamp="January 6, 2023"
              location="Joshua Tree, CA"
              caption="A quick photo I snapped from the viewpoint in Joshua Tree
						National Park. You can see Palm Springs and the Coachella
						Valley below."
            >
              <img src="/jt.jpeg" className="object-cover h-full w-full" />
            </PostLayout>

            <PostLayout
              category={CATEGORIES.Blurb}
              tile={isGrid}
              timestamp="January 6, 2023"
              location="Joshua Tree, CA"
            >
              <p className="text-xs p-8">
                A day doesn't go by I don't think about Rdio.
              </p>
            </PostLayout>

            <PostLayout
              category={CATEGORIES.Photo}
              tile={isGrid}
              timestamp="January 6, 2023"
              location="Joshua Tree, CA"
              caption="A quick photo I snapped from the viewpoint in Joshua Tree
            National Park. You can see Palm Springs and the Coachella
            Valley below."
            >
              <img src="/jt2.jpeg" className="object-cover h-full w-full" />
            </PostLayout>

            <PostLayout
              category={CATEGORIES.Post}
              tile={isGrid}
              timestamp="January 6, 2023"
              location="Joshua Tree, CA"
            >
              <div className="p-8 relative flex flex-col gap-4">
                <h2 className="text-xl text-gray-dark">Some Title</h2>
                <p className="text-xs">
                  A quick photo I snapped from the viewpoint in Joshua Tree
                  National Park. You can see Palm Springs and the Coachella
                  Valley below.
                </p>

                {!isGrid && (
                  <div className="rounded-full transition-all hover:bg-green hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs w-fit ml-auto bg-gray-light">
                    Read more
                  </div>
                )}
              </div>
            </PostLayout>

            <PostLayout
              category={CATEGORIES.Blurb}
              tile={isGrid}
              timestamp="January 6, 2023"
              location="Joshua Tree, CA"
            >
              <p className="text-xs p-8">
                A day doesn't go by I don't think about Rdio.
              </p>
            </PostLayout>
          </div>
          <div className="w-full flex flex-row items-end gap-4">
            <div className="w-3/4 h-[160px] text-center text-sm text-gray opacity-80 flex items-end justify-center">
              <img src="/trees.svg" className="w-[200px] h-auto" />
            </div>

            <div className="bg-white w-1/4 mb-4 flex flex-col gap-7"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogLayout;
