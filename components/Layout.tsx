import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "We Developer" }: Props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* favicon */}
        <link
          href="./favicon/favicon.ico"
          rel="shortcut icon"
          sizes="16x16 32x32 64x64"
        />
        {/* meta */}
        <meta name="description" content="개발자를 위한 정보 공유 사이트" />
        <meta property="og:title" content="위디" />
        <meta
          property="og:description"
          content="개발자를 위한 정보 공유 사이트"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wedeveloper.netlify.app/" />
        <meta property="og:image" content="./favicon/favicon.png" />
        <meta property="og:site_name" content="위디" />
        {/* <!-- ===== BOX ICONS ===== --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
