import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getPosts } from "../lib/post";

type Post = {
  id: number;
  date?: string;
  title?: string;
};

interface HomeProp {
  postData: Post[];
}

const Home: NextPage<HomeProp> = ({ postData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <p>Hello world</p>
      <ul>
        {postData.map((post, id) => {
          return (
            <li key={id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const postData = JSON.parse(JSON.stringify(getPosts()));
  return {
    props: {
      postData,
    },
  };
}

export default Home;
