import Head from "next/head";
import { About } from "../components/Estrutura/About";

export default function Estrutura() {
  return (
    <div className="max-w-full my-0 mx-auto flex flex-col">
      <Head>
        <title>Estrutura | W Forte</title>
      </Head>

      <main>
        <section>
          <img
            src="/assets/aqui-voce-unico.jpg"
            alt="Structure main image"
            className="w-full h-[28rem]"
          />
        </section>

        <div className="flex flex-col justify-center items-center font-black  my-7">
          <h2 className="text-brand-white text-5xl mb-3">Estrutura</h2>
          <h3 className="text-brand-yellow text-xl">
            Academia W FORTE Fitness
          </h3>
        </div>

        <section>
          <About />
        </section>
      </main>
    </div>
  );
}
