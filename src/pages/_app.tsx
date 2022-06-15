import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
