import React from "react";
import Head from "next/head";
import ErrorLayout from "../layouts/Error";

const ErrorPage = ({}) => (
  <>
    <Head>
      <title>Noah Buscher - 404</title>
      <meta property="og:title" content="Noah Buscher - 404" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Noah Buscher - 404" />
      <meta
        property="og:image"
        content="https://noahbuscher.com/social-image.jpg"
      />
      <meta
        name="twitter:image"
        content="https://noahbuscher.com/social-image.jpg"
      />
    </Head>
    <ErrorLayout />
  </>
);

export default ErrorPage;
