import React from "react";
import Head from "next/head";

import Avatar from "./Avatar";
import Sidebar from "./Sidebar";
import FilterBar from "./FilterBar";

import CalendarIcon from "./icons/CalendarIcon";
import LocationIcon from "./icons/LocationIcon";

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
          <Avatar image="/me.jpg" alt="Noah Buscher" />
          <div>
            <h3 className="p-0 m-0 text-gray-dark text-sm">Noah Buscher</h3>
            <p className="p-0 m-0 text-gray-dark text-sm">
              B. 1999 In Iowa. Based in Palm Springs, CA.
            </p>
          </div>
          <h3 className="p-0 m-0 text-gray-dark text-sm">Senior SWE, Dave</h3>
        </Sidebar>
        <div className="ml-[375px] px-8">
          <div className="max-w-screen-lg mx-auto">
            <h1 className="p-0 m-0 text-gray-dark text-2xl max-w-md mt-32 mb-24">
              Web developer and designer, currently working on DevEx at Dave.
            </h1>

            <div className="flex flex-col gap-8 relative">
              <FilterBar />

              <div className="w-full flex flex-row items-end gap-4">
                <div className="bg-gray-light rounded-3xl w-3/4 min-h-[160px]">
                  <img src="/jt.jpg" className="w-full h-auto" />
                </div>
                <div className="bg-white w-1/4 mb-4 flex flex-col gap-7">
                  <p className="p-0 m-0 text-gray-dark text-xs">
                    A quick photo I snapped from the viewpoint in Joshua Tree
                    National Park. You can see Palm Springs and the Coachella
                    Valley below.
                  </p>
                  <ul className="flex flex-col gap-1">
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
                <div className="bg-gray-light text-sm rounded-3xl w-3/4 min-h-[160px]">
                  <p className="p-8">
                    Social media isn't as social as it used to be.
                  </p>
                </div>
                <div className="bg-white w-1/4 mb-4 flex flex-col gap-7">
                  <ul className="flex flex-col gap-1">
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
                <div className="bg-gray-light text-sm rounded-3xl w-3/4 min-h-[160px]">
                  <div className="p-8 relative flex flex-col gap-4">
                    <h2 className="text-2xl text-gray-dark">Some Title</h2>
                    Social media isn't as social as it used to be.
                    <div>
                      <div className="rounded-full transition-all hover:bg-green hover:border-green cursor-pointer px-4 py-2 text-gray-dark text-sm bg-white border border-gray-light w-fit ml-auto">
                        Read more
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white w-1/4 mb-4 flex flex-col gap-7">
                  <ul className="flex flex-col gap-1">
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
                <div className="w-3/4 h-[300px] text-center text-sm text-gray opacity-80 flex items-center justify-center">
                  Put something here
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
