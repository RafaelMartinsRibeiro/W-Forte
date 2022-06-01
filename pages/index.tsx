import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | W Forte</title>
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
