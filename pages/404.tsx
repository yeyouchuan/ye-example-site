import React from "react";
import Head from "next/head";
import ErrorLayout from "../layouts/Error";

const ErrorPage = ({}) => (
  <>
    <Head>
      <title>Noah Buscher - 404</title>
      <meta property="og:title" content="Noah Buscher - 404" />
      <meta name="twitter:title" content="Noah Buscher - 404" />
    </Head>
    <ErrorLayout />
  </>
);

export default ErrorPage;
