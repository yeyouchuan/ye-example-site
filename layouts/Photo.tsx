import React from "react";
import Image from "next/image";

import Container from "../components/Container";
import { Post } from "../pages";

const PhotoLayout = ({ exif, post }: { exif: any; post: Post }) => (
  <Container showHomeLink>
    <article className="max-w-screen-lg mx-auto relative min-h-screen">
      <div className="flex flex-col items-center justify-center gap-8 text-xs text-center max-w-screen-md h-screen mx-auto">
        <div className="relative">
          <Image
            src={post.data.images!}
            alt={post.data.caption!}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md max-w-screen-lg"
            priority
          />
          <div className="hidden md:block rounded-md bg-white/60 backdrop-blur-sm p-4 text-xs absolute left-4 bottom-4 max-w-xs text-left">
            {post.data.caption}
          </div>
        </div>
        <div className="w-screen-md md:bg-gray-light md:px-8 px-4 py-2 rounded-md">
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

export default PhotoLayout;
