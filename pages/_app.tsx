import type {AppProps} from "next/app"
import {CssBaseline, GlobalStyles} from "@mui/material"
import Head from "next/head"
import Layout from "../components/layout/Layout"
import {NextPage} from "next"

const DEFAULT_GLOBAL_STYLE = {
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2C2B2A",
    fontFamily: "Montserrat",
  },
  html: {width: "100%", height: "100%"},
  "& #__next": {width: "100%", height: "100%"},
  "& div": {
    color: "#fff",
  },
}

export type WithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: WithLayout
}

export const getLayout = (page: React.ReactElement): React.ReactNode => {
  return <Layout>{page}</Layout>
}

const App = ({Component, pageProps}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>lee-bros Portfolio</title>
      </Head>
      <CssBaseline />
      <GlobalStyles styles={DEFAULT_GLOBAL_STYLE} />
      <Component {...pageProps} />
    </>
  )
}

export default App
