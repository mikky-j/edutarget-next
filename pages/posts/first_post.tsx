import Head from "next/head";
import { FunctionComponent } from "react";

interface FirstPostProps {}

const FirstPost: FunctionComponent<FirstPostProps> = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Hi there</h1>
    </>
  );
};

export default FirstPost;
