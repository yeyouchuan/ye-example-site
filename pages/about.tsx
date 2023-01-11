import React from "react";
import Link from "next/link";

import PageLayout from "../layouts/Page";

const About = ({}) => (
  <PageLayout>
    <div className="flex flex-col gap-8 mt-32 md:mt-14 mb-24">
      <img src="/noah-about.jpeg" className="w-full rounded-lg" />

      <div className="flex flex-col gap-8 max-w-screen-md">
        <p className="text-charcoal text-sm leading-7 max-w-lg">
          I am a web developer and designer currently working remotely from Palm
          Springs, California. I grew up in rural Iowa, but moved around quite
          often in my childhood. When I&apos;m not behind the computer, you can
          probably find me on a road trip, working on my pilot&apos;s license,
          or at one of the many fabulous restaurants here.
        </p>

        <p className="text-charcoal text-sm leading-7 max-w-lg">
          I&apos;m currently a senior software engineer at Dave (a neobanking
          platform) working on the frontend infrastructure. Most of my days
          consist of tweaking configs, writing handy CLIs, and chasing those
          (always flaky) CI pipeline issues. Outside of my full-time, I also
          take on a few freelance projects a year.{" "}
          <Link href="mailto:me@noahbuscher.com" className="underline">
            Drop me a line
          </Link>{" "}
          if you&apos;re interested!
        </p>

        <p className="text-charcoal text-sm leading-7 max-w-lg">Experience:</p>

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
);

export default About;
