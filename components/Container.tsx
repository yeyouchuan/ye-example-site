import React from "react";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import classnames from "classnames";

import Sidebar from "./Sidebar";

const Container = ({
  children,
  dark = false,
  showHomeLink = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  showHomeLink?: boolean;
}) => {
  const contentClassnames = classnames(
    "ml-0 md:ml-[340px] px-8 relative flex-1 flex-grow-0",
    {
      "bg-charcoal": dark,
    }
  );

  return (
    <div>
      <div>
        <Sidebar avatar="/me.jpeg" showHomeLink={showHomeLink}>
          <div>
            <h3 className="p-0 m-0 text-charcoal text-xs">Noah Buscher</h3>
            <p className="p-0 m-0 text-charcoal text-xs">
              B. 1999 in Iowa. Based in Palm Springs, CA.
            </p>
          </div>
          <h3 className="p-0 m-0 text-charcoal text-xs">Senior SWE, Dave</h3>
          <Link
            href="/about"
            className="p-0 m-0 text-charcoal text-xs border-b border-charcoal w-fit"
          >
            More about me
          </Link>
        </Sidebar>
        <div className="min-h-screen flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              type: "ease-in-out",
            }}
            className={contentClassnames}
          >
            {children}
          </motion.div>

          <div className="flex-1 justify-end flex flex-col flex-grow">
            <div className="flex-1 flex-grow-0 ml-auto pr-8">
              <img
                src="/trees.svg"
                alt="Silhouette of four Joshua Trees"
                className="w-[120px] md:w-[200px] h-auto ml-auto"
              />
            </div>
            <div className="flex-1 flex flex-grow ml-0 md:ml-[340px]">
              <div className="flex-1 flex-grow bg-[#F4F4F4] text-charcoal px-8 py-8">
                <div className="max-w-screen-lg mx-auto">
                  <div className="max-w-md my-12 md:my-24 flex flex-col gap-4">
                    <h1 className="font-serif p-0 m-0 text-gray-dark text-xl">
                      Have a project idea and want to work with me? I’d love to
                      hear from you.
                    </h1>
                    <Link
                      href="mailto:me@noahbuscher.com"
                      className="text-xs text-gray-dark border-b border-gray-dark w-fit"
                    >
                      Get in touch
                    </Link>
                  </div>

                  <div className="mx-auto max-w-screen-lg flex flex-col gap-2">
                    <p className="text-xs text-gray">
                      Find me on{" "}
                      <Link
                        className="border-b border-gray inline"
                        href="https://github.com/noahbuscher"
                      >
                        GitHub
                      </Link>{" "}
                      and{" "}
                      <Link
                        className="border-b border-gray inline"
                        href="https://read.cv/noahbuscher"
                      >
                        read.cv
                      </Link>
                    </p>
                    <p className="text-xs text-gray">Updated March 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
