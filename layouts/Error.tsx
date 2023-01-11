import React from "react";
import Link from "next/link";

import Container from "../components/Container";
import { Post } from "../pages";

const ErrorLayout = ({}) => (
  <Container>
    <article className="max-w-screen-lg mx-auto relative min-h-screen">
      <div className="flex flex-col items-center justify-center gap-8 text-xs text-center max-w-screen-md h-screen mx-auto">
        <p className="text-xl text-gray">
          I reckon what you're lookin' for ain't here
        </p>
        <Link href="/" className="text-xs text-gray underline">
          Mosey on back home
        </Link>
      </div>
    </article>
  </Container>
);

export default ErrorLayout;
