import React from "react";
import Link from "next/link";
import Head from "next/head";

import PageLayout from "../layouts/Page";

const About = ({}) => {
  const meta = {
    title: "Noah Buscher - About",
    description:
      "Noah Buscher is a web developer and designer based in Palm Springs, CA.",
  };

  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta property="og:title" content={meta.title} key="og-title" />
        <meta name="twitter:title" content={meta.title} key="twitter-title" />
        <meta name="description" content={meta.description} key="description" />
        <meta
          name="og:description"
          content={meta.description}
          key="og-description"
        />
        <meta
          name="twitter:description"
          content={meta.description}
          key="twitter-description"
        />
      </Head>
      <PageLayout>
        <div className="flex flex-col gap-8 mt-32 md:mt-14 mb-24">
          <img
            src="/noah-about.jpeg"
            alt="A landscape portrait of Noah in a windbreaker with a white background"
            className="w-full rounded-md"
          />

          <div className="flex flex-col gap-8 max-w-screen-md">
            <p className="text-charcoal text-sm leading-7 max-w-lg">
              I am a web developer and designer currently working remotely from
              Palm Springs, California. I grew up in rural Iowa, but moved
              around quite often in my childhood. When I’m not behind the
              computer, you can probably find me on a road trip, working on my
              pilot’s license, or at one of the many fabulous restaurants here.
            </p>

            <p className="text-charcoal text-sm leading-7 max-w-lg">
              I’m currently a senior software engineer at Dave (a neobanking
              platform) working on the frontend infrastructure. Most of my days
              consist of tweaking configs, writing handy CLIs, and chasing those
              (always flaky) CI pipeline issues. Outside of my full-time, I also
              take on a few freelance projects a year.{" "}
              <Link href="mailto:me@noahbuscher.com" className="underline">
                Drop me a line
              </Link>{" "}
              if you’re interested!
            </p>

            <p className="text-charcoal text-sm leading-7 max-w-lg">
              Experience:
            </p>

            <p className="text-charcoal text-sm leading-7 max-w-lg">
              Dave
              <br />
              Senior Software Engineer
              <br />
              2022 - Present
            </p>

            <p className="text-charcoal text-sm leading-7 max-w-lg">
              Vic.ai
              <br />
              Senior Web Developer
              <br />
              2021 - 2022
            </p>

            <p className="text-charcoal text-sm leading-7 max-w-lg">
              Ping Identity
              <br />
              UX Engineer
              <br />
              2019 - 2021
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default About;
