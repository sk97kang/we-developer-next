import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/font.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
