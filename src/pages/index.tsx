import type { NextPage } from "next";
import Head from "next/head";

import { motion } from "framer-motion";

import { Info } from "../components/Infos";
import { Schedule } from "../components/Schedule";
import { Structure } from "../components/Structure";

const Home: NextPage = () => {
  return (
    <motion.div
      key={"estrutura"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-full my-0 mx-auto flex flex-col"
    >
      <Head>
        <title>Início | W Forte</title>
      </Head>

      <main>
        <section>
          <img
            src="/assets/treine-na-mais.jpg"
            alt="Home main image"
            className="w-full"
          />
        </section>

        <section>
          <Schedule />
        </section>

        <section>
          <Structure />
        </section>
      </main>

      <footer>
        <Info />
      </footer>
    </motion.div>
  );
};

export default Home;
