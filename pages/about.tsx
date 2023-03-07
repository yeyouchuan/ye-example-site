import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noahbuscher.com/about" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          property="og:image"
          content="https://noahbuscher.com/social-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://noahbuscher.com/social-image.jpg"
        />
      </Head>
      <PageLayout>
        <div className="flex flex-col gap-8 mt-32 md:mt-14 mb-24">
          <Image
            src="/noah-about.jpeg"
            alt="A landscape portrait of Noah in a windbreaker with a white background"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-md"
            priority
            quality={60}
          />

          <div className="flex flex-col gap-8 max-w-screen-md">
            <p className="text-charcoal text-sm leading-7 max-w-lg">
              Hey, I’m Noah. I’m currently a senior software engineer on the
              frontend infrastructure team at{" "}
              <Link
                href="https://dave.com"
                target="_blank"
                rel="noreferrer"
                className="border-b border-charcoal inline"
              >
                Dave
              </Link>
              . There, I focus on building dev tools, creating CI/CD pipelines,
              maintaining our component library, and more. I work remote from
              (beautiful) Palm Springs, CA. After the workday, you can likely
              find me on the{" "}
              <Link
                href="/media/lush-hike"
                target="_blank"
                rel="noreferrer"
                className="border-b border-charcoal inline"
              >
                trails
              </Link>
              , in the air working on my pilot’s license, or trying one of the
              many fabulous restaurants here. Prior to a career in software, I
              was an avid professional photographer. You can check out my
              free-to-use photos over on{" "}
              <Link
                href="https://unsplash.com/@noahbuscher"
                target="_blank"
                rel="noreferrer"
                className="border-b border-charcoal inline"
              >
                Unsplash
              </Link>
              .
            </p>
            <p className="text-charcoal text-sm leading-7 max-w-lg">
              Outside of my full-time, I occasionally take on freelance work. If
              you’re looking for someone to work with to design and/or develop
              your web app or website, feel free to{" "}
              <Link
                href="mailto:me@noahbuscher.com"
                target="_blank"
                rel="noreferrer"
                className="border-b border-charcoal inline"
              >
                drop me a line
              </Link>
              .
            </p>
            <p className="text-charcoal text-sm leading-7 max-w-lg">
              Other than this site, you can find me on{" "}
              <Link
                className="border-b border-charcoal inline"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/noahbuscher"
              >
                GitHub
              </Link>{" "}
              and{" "}
              <Link
                className="border-b border-charcoal inline"
                target="_blank"
                rel="noreferrer"
                href="https://read.cv/noahbuscher"
              >
                read.cv
              </Link>
              .
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
