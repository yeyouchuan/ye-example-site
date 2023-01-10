import React from "react";
import Link from "next/link";

import Container from "../components/Container";

const PhotoLayout = ({ exif, post }: any) => {
  console.log(exif);
  return (
    <Container showHomeLink>
      <article className="max-w-screen-lg mx-auto relative min-h-screen">
        <div className="flex flex-col items-center justify-center gap-8 text-xs text-center max-w-screen-md h-screen mx-auto">
          <img
            src={post.data.images}
            className="rounded-3xl max-w-screen-lg mx-auto w-full"
          />
          <div className="w-screen-md md:bg-gray-light md:px-8 py-5 rounded-full">
            <div className="flex flex-row gap-8">
              <div>
                <small className="text-gray">Shutter speed</small>
                <p className="text-charcoal">1/{exif?.shutterSpeed || "--"}</p>
              </div>
              <div>
                <small className="text-gray">Aperature</small>
                <p className="text-charcoal">f/{exif?.aperature || "--"}</p>
              </div>
              <div>
                <small className="text-gray">ISO</small>
                <p className="text-charcoal">{exif?.iso || "--"}</p>
              </div>
              <div>
                <small className="text-gray">Taken on</small>
                <p className="text-charcoal">{exif?.camera || "--"}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default PhotoLayout;
