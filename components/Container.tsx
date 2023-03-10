import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import classnames from "classnames";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Container: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  showHomeLink?: boolean;
}> = ({ children, dark = false, showHomeLink = false }) => {
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
          <div>
            <Link
              href="/about"
              className="p-0 m-0 text-charcoal text-xs text-charcoal w-fit block"
            >
              About me ↗
            </Link>
            <Link
              href="https://github.com/noahbuscher"
              className="p-0 m-0 text-charcoal text-xs text-charcoal w-fit block"
              target="_blank"
              rel="me"
            >
              GitHub ↗
            </Link>
            <Link
              href="https://read.cv/noahbuscher"
              className="p-0 m-0 text-charcoal text-xs text-charcoal w-fit block"
              target="_blank"
              rel="me"
            >
              read.cv ↗
            </Link>
          </div>
        </Sidebar>
        <div className="min-h-screen flex flex-col">
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              type: "ease-in-out",
            }}
            className={contentClassnames}
          >
            {children}
          </motion.main>

          <Footer>
            <div className="max-w-md my-12 md:my-24 flex flex-col gap-4">
              <h3 className="font-serif p-0 m-0 text-gray-dark text-xl">
                Have a project idea? Just want to say hi? I’d love to hear from
                you.
              </h3>
              <Link
                href="mailto:me@noahbuscher.com"
                className="text-xs text-gray-dark w-fit"
              >
                Get in touch ↗
              </Link>
            </div>

            <div className="mx-auto max-w-screen-lg flex flex-col gap-2">
              <p className="text-xs text-gray">Updated March 2023</p>
            </div>
          </Footer>
        </div>
      </div>
    </div>
  );
};

export default Container;
