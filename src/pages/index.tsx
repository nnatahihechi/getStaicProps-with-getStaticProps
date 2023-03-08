import Head from "next/head";
import Image from "next/image";
import { Cardo, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import Cards from "../component /homeCard/Cards"

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>fetch data using getstaicprops and getstaicpath nextjs </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.body}>
    <Cards/>
      </main>
    </div>
  );
};

export default Home;
