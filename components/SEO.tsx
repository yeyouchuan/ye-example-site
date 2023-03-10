import React from "react";
import Head from "next/head";

const SEO_DEFAULTS = {
  title: "Noah Buscher",
  description:
    "Noah Buscher is a web developer and designer based in Palm Springs, CA.",
  url: "https://noahbuscher.com",
  type: "website",
  site_name: "Noah Buscher",
  image: "https://noahbuscher.com/social-image.jpg",
};

const SEO = ({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  type = SEO_DEFAULTS.type,
  site_name = SEO_DEFAULTS.site_name,
  image = SEO_DEFAULTS.image,
}: {
  title?: string;
  description?: string;
  type?: string;
  site_name?: string;
  image?: string;
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={site_name} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:locale" content="en-US" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content={image} />
    <meta name="twitter:image" content={image} />
    <meta name="theme-color" content="#FBFBFB" />
    <link rel="shortcut icon" href="/favicon.ico" key="shortcut-icon" />
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
  </Head>
);

export default SEO;
