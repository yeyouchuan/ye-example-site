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
}: {
  avatar: string;
  children: React.ReactNode;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownClassnames = classnames({
    "flex flex-col py-4 gap-4": isDropdownOpen,
    hidden: !isDropdownOpen,
  });

  return (
    <div>
      <div className="px-8 py-12 border-r flex-col gap-6 text-sm border-r border-gray-light w-[300px] xl:w-[375px] fixed top-0 left-0 bottom-0 hidden md:flex">
        <Link href="/">
          <Avatar
            image={avatar}
            alt="Noah Buscher"
            active={isNowWithinTime(9, 17, "America/Vancouver")}
          />
        </Link>
        {children}
        <div className="absolute bottom-12 left-8 right-8 flex flex-col gap-8 text-xs">
          <div className="bg-gray-light rounded-2xl p-6 w-full flex flex-col gap-6 ">
            Currently available for freelance.
            <button className="rounded-full w-full px-1 py-2 text-charcoal bg-white transition-all hover:bg-accent">
              Email me
            </button>
          </div>
          &copy; {new Date().getFullYear()}
        </div>
      </div>

      <div className="flex flex-col md:hidden p-2 bg-white/70 backdrop-blur-md border border-gray-light rounded-3xl fixed top-8 left-8 right-8 z-10">
        <div className="flex flex-row">
          <Link href="/">
            <Avatar
              image={avatar}
              alt="Noah Buscher"
              active={isNowWithinTime(9, 17, "America/Vancouver")}
              small
            />
          </Link>
          <button
            className="flex-1 flex-grow-0 w-fit ml-auto"
            onClick={() => setIsDropdownOpen((open) => !open)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
        <motion.div className={dropdownClassnames}>{children}</motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
