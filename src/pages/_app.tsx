import "../styles/global.css";
import "../styles/markdown.scss";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Inter, Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

export { reportWebVitals } from "next-axiom";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

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
      <div className={`${siteClass} ${inter.className} ${roboto.className}`}>
        <div className="bg"></div>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
};

export default MyApp;
