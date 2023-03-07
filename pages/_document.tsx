import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    themeColor: "#FBFBFB",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Noah Buscher" />
        <meta property="og:locale" content="en-US" />
        <meta name="theme-color" content={meta.themeColor} key="theme-color" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/favicon.ico" key="shortcut-icon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
