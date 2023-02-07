import "../styles/global.css";
import "../styles/markdown.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  let siteClass = "main";
  if (router.pathname.startsWith("/syscom")) {
    siteClass = "syscom";
  } else if (router.pathname.startsWith("/se")) {
    siteClass = "se";
  }

  function storePathValues(path: string) {
    const storage = window?.sessionStorage;

    if (!storage) return;

    if (storage.getItem("currentPath") === path) {
      storage.setItem("currentPath", path);
      return;
    }

    // Set the previous path as the value of the current path.
    const curr = storage.getItem("currentPath");
    storage.setItem("prevPath", curr || "");
    storage.setItem("currentPath", path);
  }
  useEffect(() => storePathValues(router.asPath), [router.asPath]);

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
