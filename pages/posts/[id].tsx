import { FunctionComponent } from "react";
import { getAllPostIds, getPostById } from "../../lib/post";
import { wrapFileStaticProps } from "../utils/utils";
import Layout from "../components/layout";
import { Box } from "@chakra-ui/react";

type post = {
  id: string;
  html: string;
  [key: string]: any;
};

interface PostProps {
  post: post;
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
  return (
    <Layout>
      <p>{post.id}</p>
      <Box dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

type staticProp = {
  [key: string]: any;
};

export async function getStaticProps({
  params,
}: {
  params: any;
}): Promise<staticProp> {
  const rawPost = await getPostById(params.id);
  const post = wrapFileStaticProps(rawPost);
  return {
    props: {
      post,
    },
  };
}

export default Post;
