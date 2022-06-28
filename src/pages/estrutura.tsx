import Head from "next/head";

import { motion } from "framer-motion";
import { About } from "../components/EstruturaPage/About";
import { Equipments } from "../components/EstruturaPage/Equipments";
import { Professors } from "../components/EstruturaPage/Professors";

export default function Estrutura() {
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
        <title>Estrutura | W Forte</title>
      </Head>

      <main>
        <section>
          <img
            src="/assets/aqui-voce-unico.jpg"
            alt="Structure main image"
            className="w-full xl:h-[28rem]"
          />
        </section>

        <div className="flex flex-col justify-center items-center font-black  my-7">
          <h2 className="text-brand-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3">
            Estrutura
          </h2>
          <h3 className="text-brand-yellow text-sm sm:text-base md:text-lg lg:text-xl">
            Academia W FORTE Fitness
          </h3>
          <span className="text-brand-white text-xs sm:text-sm md:text-base lg:text-lg font-black">
            Um ambiente preparado para atender toda a família.
          </span>
        </div>

        <section>
          <About />
        </section>

        <section>
          <Equipments />
        </section>

        <section>
          <Professors />
        </section>
      </main>
    </motion.div>
  );
}
