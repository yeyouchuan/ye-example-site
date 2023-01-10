import React from "react";
import Link from "next/link";

import Container from "../components/Container";

const PhotoLayout = ({ exif, post }: any) => {
  console.log(exif);
  return (
    <Container>
      <article className="max-w-screen-lg mx-auto relative min-h-screen">
        <Link
          href="/"
          className="rounded-full transition-all hover:scale-105 hover:border-accent cursor-pointer px-5 py-2 text-white text-xs bg-[#282828] block w-fit fixed right-8 top-10"
        >
          Return home
        </Link>

        <div className="flex flex-col items-center justify-center gap-8 text-xs text-center max-w-screen-md h-screen mx-auto">
          <img
            src={post.data.images}
            className="rounded-3xl max-w-screen-lg mx-auto w-full"
          />
          <div className="w-screen-md bg-gray-light px-8 py-5 rounded-full">
            <div className="flex flex-row gap-8">
              <div>
                <small className="text-gray">Shutter speed</small>
                <p className="text-gray-dark">1/{exif?.shutterSpeed || "--"}</p>
              </div>
              <div>
                <small className="text-gray">Aperature</small>
                <p className="text-gray-dark">f/{exif?.aperature || "--"}</p>
              </div>
              <div>
                <small className="text-gray">ISO</small>
                <p className="text-gray-dark">{exif?.iso || "--"}</p>
              </div>
              <div>
                <small className="text-gray">Taken on</small>
                <p className="text-gray-dark">{exif?.camera || "--"}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default PhotoLayout;
