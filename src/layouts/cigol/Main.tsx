"use client";

import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";
import { useInstituteConfig } from "@/hooks/useInstituteConfig";
import type { LayoutProps } from "@/models/layout";

import { FakultätsNav, FakultätsNavMobile } from "../rwth/FakultätsNav";
import { FacultiesNavContext } from "../faculties-nav/nav";
import CigolSideNav from "./sidenav";

type CIGOLProps = {};

export type CIGOLMainProps = LayoutProps & CIGOLProps;

const Main = (props: CIGOLMainProps) => {
  const config = useInstituteConfig(props.institute);
  const [open, setOpen] = useContext(FacultiesNavContext)
  return (
    <div className="scil relative bg-white text-black min-h-screen">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/assets/cigol/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/assets/cigol/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/assets/cigol/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`/assets/cigol/favicon/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`/assets/cigol/favicon/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <link rel="shortcut icon" href={`/assets/cigol/favicon/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content={`/assets/cigol/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {props.meta}
      <div>
        <nav
          className="relative grid grid-rows-[auto_auto_auto] justify-center gap-2 border-b-2 border-[#c1bcb2] bg-[#f5eedd] py-4 lg:grid-cols-[auto_1fr_auto] lg:grid-rows-1  lg:py-0"
          style={{
            background:
              "inear-gradient(283deg, rgba(245,238,221,1) 0%, rgba(252,249,241,1) 78%, rgba(245,238,221,1) 100%)",
          }}
        >
          <Link
            href={"/cigol"}
            className="grid justify-center hover:border-b-0"
          >
            <Image
              src="/assets/cigol/logo.png"
              alt="Logo"
              width={88}
              height={88}
              className="rotate-180 mix-blend-multiply lg:mx-6 lg:my-4"
            />
          </Link>
          <div className="grid items-center justify-start">
            <span className="font-sans text-xl font-bold">
              {config.name} <br />
              MALO ist Spaß.
            </span>
          </div>
          <div className="flex">
            <button
              className="m-2 my-auto h-min rounded bg-gray-200 px-2 py-1 hover:bg-gray-300"
              onClick={() => {
                setOpen((x) => !x);
              }}
            >
              Fakultäten & Institute
            </button>
            <Link href={"/"} title="Zurück zur HTWR Hauptseite">
              <Image
                src="/assets/cigol/logo-htwr.png"
                alt="Logo"
                width={200}
                height={56}
                className="mr-6 mt-4 w-[200px] bg-transparent"
              />
            </Link>
          </div>
          <div className="absolute bottom-[-2px] right-6 hidden flex-row lg:flex">
            <button
              type="button"
              className="mr-1 rounded-t-lg border-2 border-b-0 border-[#c1bcb2] bg-gradient-to-b from-white to-[#f9f5ec] px-3 py-1 font-sans text-lg font-medium"
            >
              Deutsch
            </button>
            <button
              type="button"
              className="rounded-t-lg border-2 border-b-0 border-[#c1bcb2] bg-gradient-to-b from-[#efebdd] to-[#e7e1cf] px-3 py-1 font-sans text-lg font-medium hover:from-[#efebdd] hover:to-[#fefaeb]"
            >
              English
            </button>
          </div>
        </nav>
        <div className="page mt-6 grid grid-rows-[auto_1fr] font-sans lg:grid-cols-[auto_1fr] lg:grid-rows-1">
            <CigolSideNav></CigolSideNav>
          <div className="content bg-transparent">{props.children}</div>
        </div>
      </div>
      <InstituteSwitches institute={props.institute} />
    </div>
  );
};

export { Main };
