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

type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

const getLink = (type: String, slug: string): string => {
  switch (type) {
    case "Post":
      return `/posts/${slug}`;
    case "Photo":
      return `/media/${slug}`;
  }
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
    "text-sm rounded-3xl overflow-hidden relative",
    {
      "w-3/4 min-h-[160px]": !tile,
      "aspect-square w-full h-full transition-transform hover:scale-105 cursor-pointer":
        tile,
      "bg-gray-light": category !== CATEGORIES.Post,
      "bg-white border border-gray-light": category === CATEGORIES.Post,
    }
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, width: "auto" }}
      animate={{ opacity: 1, width: "auto" }}
      exit={{ opacity: 0, width: "auto" }}
      className="w-full flex flex-row items-end gap-4 cursor-pointer"
    >
      <div
        className={contentClasses}
        onClick={() => router.push(getLink(type, slug))}
      >
        {children}
      </div>
      {!tile && (
        <div className="w-1/4 mb-4 flex flex-col gap-7">
          {caption && (
            <p className="p-0 m-0 text-gray-dark text-xs w-3/4 xl:w-full">
              {caption}
            </p>
          )}

          <ul className="flex flex-col gap-1">
            {category && (
              <li className="flex flex-row items-center gap-2">
                <FolderIcon />
                <time className="text-xs text-gray">
                  {CATEGORIES[category]}
                </time>
              </li>
            )}

            {timestamp && (
              <li className="flex flex-row items-center gap-2">
                <CalendarIcon />
                <time className="text-xs text-gray">{timestamp}</time>
              </li>
            )}

            {location && (
              <li className="flex flex-row items-center gap-2">
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
