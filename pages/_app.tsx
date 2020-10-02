import type { AppProps /*, AppContext */ } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import "../styles/font.css";
import { ThemeProvider } from "styled-components";
import { theme, responsiveTheme } from "../styles/theme";
import { useCallback, useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [size, setSize] = useState(false);
  const onResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      setSize(true);
    } else {
      setSize(false);
    }
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <ThemeProvider theme={size ? responsiveTheme : theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
