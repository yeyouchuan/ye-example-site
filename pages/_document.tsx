import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    url: "https://noahbuscher.com",
    themeColor: "#FBFBFB",
    author: "Noah Buscher",
    socialImage: "https://noahbuscher.com/social-image.jpg",
    description: "Web developer and designer based in Palm Springs, CA.",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="author" content={meta.author} key="author" />
        <meta property="og:url" content={meta.url} key="og-url" />
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
        <meta name="image" content={meta.socialImage} key="image" />
        <meta property="og:image" content={meta.socialImage} key="og-image" />
        <meta
          name="twitter:image"
          content={meta.socialImage}
          key="twitter-image"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter-card"
        />
        <link rel="shortcut icon" href="/favicon.ico" key="shortcut-icon" />
        <meta name="theme-color" content={meta.themeColor} key="theme-color" />
        <link rel="icon" href="/favicon.ico" key="favicon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
