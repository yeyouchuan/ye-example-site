import React from "react";
import Image from "next/image";

const Avatar = ({
  alt,
  image,
  active = false,
}: {
  alt: string;
  image: string;
  active?: boolean;
}) => (
  <div className="w-14 h-14 relative">
    <div className="w-full h-full relative rounded-full overflow-hidden">
      <Image src={image} fill alt={alt} />
    </div>
    <div className="w-3 h-3 bg-green rounded-full border-[2px] border-white absolute top-[2px] right-[2px]" />
  </div>
);

export default Avatar;
