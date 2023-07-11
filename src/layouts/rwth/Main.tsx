"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import type { LayoutProps, NavbarConfig } from "../../models/layout";
import Footer from "./Footer";
import { DefaultNavbar } from "./instituteConfig";
import Navbar from "./Navbar";

type RWTHProps = {
  pad?: boolean;
  navbarConfig?: NavbarConfig;
};

type MainProps = LayoutProps & RWTHProps;

const Main = (props: MainProps) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="scil relative bg-[#e5e5e5] font-roboto">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${router.basePath}/assets/rwth/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/assets/rwth/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/assets/rwth/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href="/assets/rwth/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href={`${router.basePath}/assets/rwth/favicon/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href={`${router.basePath}/assets/rwth/favicon/favicon.ico`}
        />
        <meta name="apple-mobile-web-app-title" content="htwr-aachen" />
        <meta name="application-name" content="htwr-aachen" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content={`${router.basePath}/assets/rwth/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {props.meta}
      <div
        className={`relative  min-h-screen w-full transition-all ${
          menuOpen ? "left-[-275px] h-screen overflow-hidden" : "left-0"
        }`}
      >
        <Navbar
          instituteName={props.instituteName || ""}
          instituteTitle={props.instituteTitle || ""}
          config={props.navbarConfig || DefaultNavbar}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <div className="max-w-[1280px] lg:mx-auto">
          {/* <SharedPushNotify /> */}
        </div>
        <div className="max-w-[1280px] lg:mx-auto ">
          <div className="m-0 w-full bg-rwth-bg py-12">
            <div className={`mx-auto w-full ${!props.pad && "max-w-[980px]"}`}>
              {props.children}
            </div>
          </div>
        </div>
        <Footer instituteLinks={props.instituteLinks || []} />
      </div>
    </div>
  );
};

export { Main };
