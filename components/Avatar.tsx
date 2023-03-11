import React from "react";
import Image from "next/image";
import classnames from "classnames";

const Avatar: React.FC<{
  alt: string;
  image: string;
  active?: boolean;
  small?: boolean;
}> = ({ alt, image, active = false, small = false }) => {
  const avatarClassnames = classnames("relative", {
    "w-14 h-14": !small,
    "w-8 h-8": small,
  });

  const indicatorClassnames = classnames(
    "bg-accent rounded-md border-white absolute",
    {
      "w-3 h-3 top-[2px] right-[2px] border-[2px]": !small,
      "w-2 h-2 top-[1px] right-[1px] border-[1px]": small,
    }
  );

  return (
    <div className={avatarClassnames}>
      <div className="w-full h-full relative rounded-full overflow-hidden">
        <Image src={image} fill alt={alt} quality={30} />
      </div>
      {active && <div className={indicatorClassnames} />}
    </div>
  );
};
export default Avatar;
