import "../styles/global.css";
import "../styles/markdown.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  let siteClass = "main";
  if (router.pathname.startsWith("/syscom")) {
    siteClass = "syscom";
  } else if (router.pathname.startsWith("/se")) {
    siteClass = "se";
  }

  return (
    <>
      <div className={siteClass}>
        <div className="bg"></div>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
};

export default MyApp;
