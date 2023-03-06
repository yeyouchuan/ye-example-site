import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import classnames from "classnames";

import Avatar from "./Avatar";
import MenuIcon from "./icons/MenuIcon";

import { isNowWithinTime } from "../utils/time";

const Sidebar = ({
  avatar,
  children,
  showHomeLink = false,
}: {
  avatar: string;
  children: React.ReactNode;
  showHomeLink?: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownClassnames = classnames({
    "flex flex-col py-4 gap-4": isDropdownOpen,
    hidden: !isDropdownOpen,
  });

  return (
    <div>
      <div className="px-8 py-8 border-r flex-col gap-6 text-sm border-r border-gray-light w-[340px] fixed top-0 left-0 bottom-0 hidden md:flex">
        <Link href="/">
          <Avatar
            image={avatar}
            alt="Noah Buscher"
            active={isNowWithinTime(9, 17, "America/Vancouver")}
          />
        </Link>
        {children}
        <div className="absolute bottom-12 left-8 right-8 flex flex-col gap-8 text-xs">
          <div className="bg-gray-light rounded-md p-4 w-full flex flex-col gap-6 text-gray-dark">
            Currently available for freelance.
            <Link
              href="mailto:me@noahbuscher.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md w-full px-2 py-1.5 text-charcoal bg-white transition-all ease-in-out hover:bg-accent text-center"
            >
              Email me
            </Link>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex-1">&copy; {new Date().getFullYear()}</div>
            <img
              src="/connectedness.svg"
              alt="Two interlocking circles"
              className="flex-1 h-4 w-auto flex-grow-0"
            />
          </div>
        </div>
      </div>

      {showHomeLink && (
        <Link
          href="/"
          className="rounded-md transition-all ease-in-out hover:scale-105 ease-in-out hover:border-accent cursor-pointer px-2 py-1.5 text-white text-xs bg-[#282828] block w-fit fixed right-8 top-10 hidden md:block z-10"
        >
          Return home
        </Link>
      )}

      <div className="fixed top-8 left-8 right-8 z-10 flex flex-row gap-2 flex-col">
        <div className="w-full flex flex-col md:hidden p-2 bg-white/70 backdrop-blur-md rounded-3xl border border-gray-light">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Avatar
                image={avatar}
                alt="Noah Buscher"
                active={isNowWithinTime(9, 17, "America/Vancouver")}
                small
              />
            </Link>
            {!showHomeLink && (
              <button
                className="flex-1 flex-grow-0 w-fit ml-auto"
                onClick={() => setIsDropdownOpen((open) => !open)}
              >
                <MenuIcon size={32} />
              </button>
            )}

            {showHomeLink && (
              <Link
                href="/"
                className="cursor-pointer text-charcoal text-xs ml-auto rounded-full bg-gray-light px-4 py-2"
              >
                Return home
              </Link>
            )}
          </div>
          <motion.div className={dropdownClassnames}>{children}</motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
