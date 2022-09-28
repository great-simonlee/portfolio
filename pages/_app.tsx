import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default App;
