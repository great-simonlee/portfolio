import type { AppProps } from "next/app";
import { CssBaseline, GlobalStyles } from "@mui/material";
import Head from "next/head";
import Layout from "../components/layout/Layout";

const DEFAULT_GLOBAL_STYLE = {
  body: {
    width: "100%",
    height: "100%",
  },
  html: { width: "100%", height: "100%" },
  "& #__next": { width: "100%", height: "100%" },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>lee-bros Portfolio</title>
      </Head>
      <CssBaseline />
      <GlobalStyles styles={DEFAULT_GLOBAL_STYLE} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
