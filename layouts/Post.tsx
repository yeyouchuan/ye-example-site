import React from "react";

import Container from "../components/Container";

const BlogLayout = ({}) => {
  return (
    <Container>
      <article className="max-w-screen-lg mx-auto relative min-h-screen mb-24">
        <button className="rounded-full transition-all hover:bg-green hover:border-green cursor-pointer px-5 py-2 text-gray-dark text-xs bg-gray-light block w-fit fixed right-8 bottom-8">
          ↫ Return home
        </button>
        <h1 className="p-0 m-0 text-gray-dark text-[1.953rem] leading-tight mt-32 mb-8 max-w-lg mx-auto text-center">
          A Trip to Coachella Valley Preserve and Joshua Tree
        </h1>
        <div className="flex flex-row gap-8 text-xs mb-24 text-center max-w-screen-md mx-auto">
          <div className="flex-1">
            <small className="text-gray">Publish date</small>
            <p>January 6, 2022</p>
          </div>
          <div className="flex-1">
            <small className="text-gray">Location posted</small>
            <p>Palm Springs, CA</p>
          </div>
          <div className="flex-1">
            <small className="text-gray">Read time</small>
            <p>6 minutes</p>
          </div>
          <div className="flex-1">
            <small className="text-gray">Author</small>
            <p>Noah Buscher</p>
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-center"></div>
      </article>
      <div className="w-full flex flex-row justify-start gap-4">
        <div className="h-[160px] text-center text-sm text-gray opacity-80 flex items-end justify-center">
          <img src="/trees.svg" className="w-[200px] h-auto" />
        </div>
      </div>
    </Container>
  );
};

export default BlogLayout;
