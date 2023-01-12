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
    url: "https://noahbuscher.com",
    themeColor: "#FBFBFB",
    twitterHandle: "@noahbschr",
    author: "Noah Buscher",
    socialImage: "https://noahbuscher.com/social-image.jpg",
    description: "Web developer and designer based in Palm Springs, CA.",
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
        <meta name="author" content={meta.author} />
        <meta property="og:url" content={meta.url} />
        <meta name="description" content={meta.description} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="image" content={meta.socialImage} />
        <meta property="og:image" content={meta.socialImage} />
        <meta name="twitter:image" content={meta.socialImage} />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content={meta.themeColor} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                        className="underline inline"
                        href="https://github.com/noahbuscher"
                      >
                        GitHub
                      </Link>{" "}
                      and{" "}
                      <Link
                        className="underline inline"
                        href="https://twitter.com/noahbschr"
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
