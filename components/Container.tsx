import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Avatar from "./Avatar";
import Sidebar from "./Sidebar";
import FilterBar from "./FilterBar";

import FolderIcon from "./icons/FolderIcon";
import CalendarIcon from "./icons/CalendarIcon";
import LocationIcon from "./icons/LocationIcon";

import { isNowWithinTime } from "../utils/time";

const Container = ({}) => {
  const meta = {
    title: "Noah Buscher - Developer",
    description: "",
    image: "tbd",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="description"
          content="Noah Buscher is a web developer and designer, currently at Dave and available for freelance work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Sidebar>
          <Avatar
            image="/me.jpg"
            alt="Noah Buscher"
            active={isNowWithinTime(9, 17, "America/Vancouver")}
          />
          <div>
            <h3 className="p-0 m-0 text-gray-dark text-sm">Noah Buscher</h3>
            <p className="p-0 m-0 text-gray-dark text-sm">
              B. 1999 in Iowa. Based in Palm Springs, CA.
            </p>
          </div>
          <h3 className="p-0 m-0 text-gray-dark text-sm">Senior SWE, Dave</h3>
          <a className="p-0 m-0 text-gray-dark text-sm underline">
            More about me
          </a>
        </Sidebar>
        <div className="ml-[300px] xl:ml-[375px] px-8 relative">
          <div className="max-w-screen-lg mx-auto">
            <h1 className="p-0 m-0 text-gray-dark text-2xl max-w-md mt-32 mb-24">
              Web developer and designer, currently DX wrangler at Dave.
            </h1>

            <div className="flex flex-col gap-8 relative">
              <FilterBar />

              <motion.div
                className="w-full flex flex-col xl:flex-row items-end gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                variants={{
                  visible: { opacity: 1, y: -10 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="bg-gray-light rounded-3xl xl:w-3/4 min-h-[160px]">
                  <img src="/jt.jpg" className="w-full h-auto" />
                </div>
                <div className="bg-white xl:w-1/4 mb-4 flex flex-row xl:flex-col gap-4 xl:gap-7">
                  <p className="p-0 m-0 text-gray-dark text-xs w-3/4 xl:w-full">
                    A quick photo I snapped from the viewpoint in Joshua Tree
                    National Park. You can see Palm Springs and the Coachella
                    Valley below.
                  </p>
                  <ul className="flex flex-col gap-1 w-1/4 xl:w-full">
                    <li className="flex flex-row items-center gap-2">
                      <FolderIcon />
                      <time className="text-xs text-gray">Writing</time>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <CalendarIcon />
                      <time className="text-xs text-gray">January 6, 2023</time>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <LocationIcon />
                      <time className="text-xs text-gray">Joshua Tree, CA</time>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <div className="w-full flex flex-row items-end gap-4">
                <div className="bg-gray-light text-sm rounded-3xl w-3/4 min-h-[160px]">
                  <p className="text-sm p-8">
                    A day doesn't go by I don't think about Rdio.
                  </p>
                </div>
                <div className="bg-white w-1/4 mb-4 flex flex-col gap-7">
                  <ul className="flex flex-col gap-1">
                    <li className="flex flex-row items-center gap-2">
                      <FolderIcon />
                      <time className="text-xs text-gray">Writing</time>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <CalendarIcon />
                      <time className="text-xs text-gray">January 6, 2023</time>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <LocationIcon />
                      <time className="text-xs text-gray">Joshua Tree, CA</time>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex flex-row items-end gap-4">
                <div className="border border-gray-light text-sm rounded-3xl w-3/4 min-h-[160px]">
                  <div className="p-8 relative flex flex-col gap-4">
                    <h2 className="text-xl text-gray-dark">Some Title</h2>
                    <p className="text-sm w-3/4">
                      A quick photo I snapped from the viewpoint in Joshua Tree
                      National Park. You can see Palm Springs and the Coachella
                      Valley below.
                    </p>
                    <div className="rounded-full transition-all hover:bg-green hover:border-green cursor-pointer px-4 py-2 text-gray-dark text-xs bg-gray-light w-fit ml-auto">
                      Read more
                    </div>
                  </div>
                </div>
                <div className="bg-white w-1/4 mb-4 flex flex-col gap-7">
                  <ul className="flex flex-col gap-1">
                    <li className="flex flex-row items-center gap-2">
                      <FolderIcon />
                      <time className="text-xs text-gray">Writing</time>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <CalendarIcon />
                      <time className="text-xs text-gray">January 6, 2023</time>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                      <LocationIcon />
                      <time className="text-xs text-gray">Joshua Tree, CA</time>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full flex flex-row items-end gap-4">
                <div className="w-3/4 h-[160px] text-center text-sm text-gray opacity-80 flex items-end justify-center">
                  <img src="/trees.svg" className="w-[200px] h-auto" />
                </div>

                <div className="bg-white w-1/4 mb-4 flex flex-col gap-7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
