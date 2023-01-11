import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import classnames from "classnames";

import FolderIcon from "./icons/FolderIcon";
import CalendarIcon from "./icons/CalendarIcon";
import LocationIcon from "./icons/LocationIcon";

export const CATEGORIES: any = {
  Post: "Post",
  Photo: "Photo",
  Blurb: "Blurb",
};

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

const getLink = (type: String, slug: string): string => {
  switch (type) {
    case "Post":
      return `/posts/${slug}`;
    case "Photo":
      return `/media/${slug}`;
  }

  return "/";
};

const PostLayout = ({
  caption,
  children,
  category,
  timestamp,
  tile = false,
  type,
  slug,
  location,
}: {
  caption?: string;
  children: React.ReactNode;
  category?: Category;
  timestamp?: string;
  tile?: boolean;
  type: string;
  slug: string;
  location?: string;
}) => {
  const router = useRouter();

  const contentClasses = classnames(
    "text-sm rounded-md overflow-hidden relative",
    {
      "w-full lg:w-3/4": !tile,
      "aspect-square w-full transition-transform ease-in-out hover:scale-105 ease-in-out hover:rotate-1 cursor-pointer flex items-center justify-center":
        tile,
      "bg-gray-light": category !== CATEGORIES.Post,
      "bg-[#FFF1D6] border border-[#E9CD94]": category === CATEGORIES.Post,
    }
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, width: "auto" }}
      animate={{ opacity: 1, width: "auto" }}
      exit={{ opacity: 0, width: "auto" }}
      className="w-full flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-4 cursor-pointer"
    >
      <div
        className={contentClasses}
        onClick={() => router.push(getLink(type, slug))}
      >
        {children}
      </div>
      {!tile && (
        <div className="w-full lg:w-1/4 mb-4 flex flex-col-reverse lg:flex-col gap-3 lg:gap-7">
          {caption && (
            <div className="flex-1 w-full">
              <p className="p-0 m-0 text-charcoal text-xs lg:w-3/4 xl:w-full">
                {caption}
              </p>
            </div>
          )}

          <ul className="flex-1 flex flex-row lg:flex-col gap-1">
            {category && (
              <li className="flex-1 hidden lg:flex flex-row items-center gap-2">
                <FolderIcon />
                <time className="text-xs text-gray">
                  {CATEGORIES[category]}s
                </time>
              </li>
            )}

            {timestamp && (
              <li className="flex-1 flex lg:flex-row items-center gap-2">
                <CalendarIcon />
                <time className="text-xs text-gray">{timestamp}</time>
              </li>
            )}

            {location && (
              <li className="flex-1 flex lg:flex-row items-center gap-2">
                <LocationIcon />
                <p className="text-xs text-gray">{location}</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default PostLayout;
