import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <p>Hello world</p>
      <Link href="/posts/first_post">Click me</Link>
    </div>
  );
};

export default Home;
