import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="max-w-full my-0 mx-auto flex flex-col">
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
          
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
