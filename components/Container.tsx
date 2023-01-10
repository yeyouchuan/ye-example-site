import React from "react";
import Head from "next/head";
import Link from "next/link";

import classnames from "classnames";

import Avatar from "./Avatar";
import Sidebar from "./Sidebar";

import { isNowWithinTime } from "../utils/time";

const Container = ({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) => {
  const meta = {
    title: "Noah Buscher - Developer",
    description: "",
    image: "tbd",
  };

  const contentClassnames = classnames(
    "ml-0 md:ml-[300px] xl:ml-[375px] px-8 relative",
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
        <Sidebar avatar="/me.jpg">
          <div>
            <h3 className="p-0 m-0 text-charcoal text-xs">Noah Buscher</h3>
            <p className="p-0 m-0 text-charcoal text-xs">
              B. 1999 in Iowa. Based in Palm Springs, CA.
            </p>
          </div>
          <h3 className="p-0 m-0 text-charcoal text-xs">Senior SWE, Dave</h3>
          <a className="p-0 m-0 text-charcoal text-xs underline">
            More about me
          </a>
        </Sidebar>
        <div className={contentClassnames}>{children}</div>
      </div>
    </div>
  );
};

export default Container;
