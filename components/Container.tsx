import React from "react";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import classnames from "classnames";

import Avatar from "./Avatar";
import Sidebar from "./Sidebar";

import { isNowWithinTime } from "../utils/time";

const Container = ({
  children,
  dark = false,
  showHomeLink = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  showHomeLink?: boolean;
}) => {
  const meta = {
    title: "Noah Buscher - Developer",
    description: "Web developer and designer based in Palm Springs, CA.",
    image: "tbd",
  };

  const contentClassnames = classnames(
    "ml-0 md:ml-[300px] xl:ml-[375px] px-8 relative flex-1 flex-grow-0",
    {
      "bg-charcoal": dark,
    }
  );

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
        <Sidebar avatar="/me.jpg" showHomeLink={showHomeLink}>
          <div>
            <h3 className="p-0 m-0 text-charcoal text-xs">Noah Buscher</h3>
            <p className="p-0 m-0 text-charcoal text-xs">
              B. 1999 in Iowa. Based in Palm Springs, CA.
            </p>
          </div>
          <h3 className="p-0 m-0 text-charcoal text-xs">Senior SWE, Dave</h3>
          <Link
            href="/about"
            className="p-0 m-0 text-charcoal text-xs underline"
          >
            More about me
          </Link>
        </Sidebar>
        <div className="min-h-screen flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                className="w-[120px] md:w-[200px] h-auto ml-auto"
              />
            </div>
            <div className="flex-1 flex flex-grow ml-0 md:ml-[300px] xl:ml-[375px]">
              <div className="flex-1 flex-grow bg-[#F4F4F4] text-charcoal px-8 py-8">
                <div className="max-w-screen-lg mx-auto">
                  <div className="mx-auto max-w-screen-lg flex flex-col gap-2">
                    <p className="text-xs text-gray">
                      Find me on{" "}
                      <Link
                        className="underline inline"
                        href="https://github.com/noahbuscher"
                      >
                        GitHub
                      </Link>{" "}
                      and{" "}
                      <Link
                        className="underline inline"
                        href="https://github.com/noahbuscher"
                      >
                        Twitter
                      </Link>
                    </p>
                    <p className="text-xs text-gray">Updated January 2023</p>
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
