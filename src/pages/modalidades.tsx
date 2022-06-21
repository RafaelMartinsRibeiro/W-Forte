import Head from "next/head";

import { motion } from "framer-motion";
import { Modalities } from "../components/Modalidades";

export default function Modalidades() {
  return (
    <motion.div
      key={"modalidade"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-full my-0 mx-auto flex flex-col"
    >
      <Head>
        <title>Modalidades | W Forte</title>
      </Head>

      <main>
        <section>
          <img
            src="/assets/nossas-modalidades.png"
            alt="Structure main image"
            className="w-full h-[28rem]"
          />
        </section>

        <section>
          <Modalities />
        </section>
      </main>
    </motion.div>
  );
}
