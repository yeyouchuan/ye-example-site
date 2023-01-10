import React from "react";
import Link from "next/link";

import Container from "../components/Container";

const BlogLayout = ({}) => {
  return (
    <Container>
      <article className="max-w-screen-lg mx-auto relative min-h-screen mb-24">
        <Link
          href="/"
          className="rounded-full transition-all hover:scale-105 hover:border-accent cursor-pointer px-5 py-2 text-white text-xs bg-[#282828] block w-fit fixed right-8 top-10"
        >
          Return home
        </Link>
        <h1 className="p-0 m-0 text-charcoal text-[1.953rem] leading-tight mt-32 mb-8 max-w-lg mx-auto text-center">
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
        <div className="flex flex-col gap-12 justify-center">
          <p className="text-sm leading-8 max-w-screen-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            gravida feugiat ligula, et ultrices arcu pulvinar et. Nunc nec nunc
            eros. Curabitur enim neque, placerat ac lectus sit amet, accumsan
            iaculis mauris. Morbi nec turpis eu sapien tempor ornare id sit amet
            nisi. Duis fringilla turpis sed dignissim dictum. Curabitur
            consequat luctus turpis, sed consequat lectus convallis sed. Proin
            porttitor dui vel nisl accumsan, ac gravida massa vulputate. Integer
            erat tellus, efficitur sit amet egestas quis, scelerisque ut massa.
            Ut non vehicula mauris.
          </p>
          <img
            src="/media/jt.jpeg"
            className="rounded-3xl max-w-screen-lg mx-auto w-full"
          />
          <p className="text-sm leading-8 max-w-screen-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            gravida feugiat ligula, et ultrices arcu pulvinar et. Nunc nec nunc
            eros. Curabitur enim neque, placerat ac lectus sit amet, accumsan
            iaculis mauris. Morbi nec turpis eu sapien tempor ornare id sit amet
            nisi. Duis fringilla turpis sed dignissim dictum. Curabitur
            consequat luctus turpis, sed consequat lectus convallis sed. Proin
            porttitor dui vel nisl accumsan, ac gravida massa vulputate. Integer
            erat tellus, efficitur sit amet egestas quis, scelerisque ut massa.
            Ut non vehicula mauris. Nunc malesuada tincidunt eros, non convallis
            libero pellentesque in. Vestibulum vitae erat leo. Mauris id orci
            dui. Phasellus eu metus ipsum. Donec congue, risus id tristique
            viverra, nibh lectus molestie lacus, sit amet pretium nunc ligula eu
            ante. Mauris condimentum id massa sit amet rutrum. Sed bibendum,
            eros id vestibulum eleifend, libero sapien porttitor sapien, eu
            euismod libero mauris a enim.
          </p>
        </div>
      </article>
    </Container>
  );
};

export default BlogLayout;
