import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
