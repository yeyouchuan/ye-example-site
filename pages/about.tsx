import React from "react";
import Link from "next/link";

import PageLayout from "../layouts/Page";

const About = ({}) => (
  <PageLayout>
    <div className="flex flex-col gap-8 mt-32 md:mt-8 mb-24">
      <img src="/noah.jpg" className="w-full rounded-lg" />

      <div className="flex flex-col gap-8 max-w-screen-md">
        <h1 className="flex-1 flex-grow-0 p-0 m-0 text-charcoal text-md max-w-md">
          Foo, bar, baz.
        </h1>

        <p className="text-charcoal text-xs max-w-md">
          Web developer and designer, currently developer experience wrangler at
          Dave. Web developer and designer, currently developer experience
          wrangler at Dave. Web developer and designer, currently developer
          experience wrangler at Dave.
        </p>

        <p className="text-charcoal text-xs max-w-md">
          Web developer and designer, currently developer experience wrangler at
          Dave. Web developer and designer, currently developer experience
          wrangler at Dave. Web developer and designer, currently developer
          experience wrangler at Dave.
        </p>

        <Link className="text-charcoal text-xs underline" href="/">
          Return home
        </Link>
      </div>
    </div>
  </PageLayout>
);

export default About;
