import Head from "next/head";

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
      </main>
    </div>
  );
}
