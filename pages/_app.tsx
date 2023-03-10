import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
    <Analytics />
  </>
);

export default App;
