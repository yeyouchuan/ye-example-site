import React from "react";
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

const PostLayout = ({
  caption,
  children,
  category,
  timestamp,
  tile = false,
  location,
}: {
  caption?: string;
  children: React.ReactNode;
  category?: Category;
  timestamp?: string;
  tile?: boolean;
  location?: string;
}) => {
  const contentClasses = classnames(
    "text-sm rounded-3xl overflow-hidden relative",
    {
      "w-3/4 min-h-[160px]": !tile,
      "aspect-square w-full h-full transition-transform hover:scale-105": tile,
      "bg-gray-light": category !== CATEGORIES.Post,
      "bg-white border border-gray-light": category === CATEGORIES.Post,
    }
  );

  return (
    <motion.div
      layout="position"
      className="w-full flex flex-row items-end gap-4"
    >
      <div className={contentClasses}>{children}</div>
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
