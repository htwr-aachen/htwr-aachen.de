import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";
import { Tooltip } from "@/components/tooltip";
import type { LayoutProps } from "@/models/layout";

import { FakultätsNav, FakultätsNavMobile } from "../rwth/FakultätsNav";

type CIGOLProps = {};

export type CIGOLMainProps = LayoutProps & CIGOLProps;

const Main = (props: CIGOLMainProps) => {
  const [fakultätsNavOpen, setFakultätsNavOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="scil relative font-roboto">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${router.basePath}/assets/cigol/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/assets/cigol/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/assets/cigol/favicon/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${router.basePath}/assets/cigol/favicon/site.webmanifest`}
        />
        <link
          rel="mask-icon"
          href={`${router.basePath}/assets/cigol/favicon/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href={`${router.basePath}/assets/cigol/favicon/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content={`${router.basePath}/assets/cigol/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {props.meta}
      <AnimatePresence>
        {fakultätsNavOpen && (
          <FakultätsNav open={fakultätsNavOpen} setOpen={setFakultätsNavOpen} />
        )}
        {fakultätsNavOpen && (
          <FakultätsNavMobile
            open={fakultätsNavOpen}
            setOpen={setFakultätsNavOpen}
          />
        )}
      </AnimatePresence>

      <div>
        <nav
          className="relative grid grid-cols-[auto_1fr_auto] border-b-2 border-[#c1bcb2]  bg-[#f5eedd]"
          style={{
            background:
              "inear-gradient(283deg, rgba(245,238,221,1) 0%, rgba(252,249,241,1) 78%, rgba(245,238,221,1) 100%)",
          }}
        >
          <Tooltip content="Zurück zur CIGOL Hauptseite">
            <Link href={"/cigol"} className="hover:border-b-0">
              <Image
                src="/assets/cigol/logo.png"
                alt="Logo"
                width={88}
                height={88}
                className="my-4 mx-6 rotate-180 mix-blend-multiply"
              />
            </Link>
          </Tooltip>
          <div className="grid items-center justify-start">
            <span className="font-sans text-xl font-bold">
              {props.instituteTitle} <br />
              MALO wird Spaß.
            </span>
          </div>
          <div className="flex">
            <button
              className="m-2 my-auto h-min rounded bg-gray-200 py-1 px-2 hover:bg-gray-300"
              onClick={() => {
                setFakultätsNavOpen((x) => !x);
              }}
            >
              Fakultäten & Institute
            </button>
            <Tooltip content="Zurück zur HTWR Hauptseite">
              <Link href={"/"}>
                <Image
                  src="/assets/cigol/logo-htwr.png"
                  alt="Logo"
                  width={200}
                  height={56}
                  className="mt-4 mr-6 w-[200px] bg-transparent"
                />
              </Link>
            </Tooltip>
          </div>
          <div className="absolute right-6 bottom-[-2px] flex flex-row">
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
        <div className="page mt-6 grid grid-cols-[auto_1fr] font-sans">
          <aside className="mx-6 w-[200px]">
            <div className="rounded-3xl bg-[#f5eedd]">
              <ul className="py-6 pl-4">
                <li className="py-1 first:pt-0">
                  <Link
                    href={"/cigol/forschung"}
                    className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
                  >
                    Forschung
                  </Link>
                </li>
                <li className="py-1 first:pt-0">
                  <Link
                    href={"/cigol/forschung"}
                    className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
                  >
                    Lehre
                  </Link>
                </li>
                <li className="py-1 first:pt-0">
                  <Link
                    href={"/cigol/forschung"}
                    className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
                  >
                    Mitarbeiter
                  </Link>
                </li>
                <li className="py-1 first:pt-0">
                  <Link
                    href={"/cigol/forschung"}
                    className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
                  >
                    Publikationen
                  </Link>
                </li>
                <li className="py-1 first:pt-0">
                  <Link
                    href={"/cigol/forschung"}
                    className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
                  >
                    Bücher
                  </Link>
                </li>
                <li className="py-1 first:pt-0">
                  <Link
                    href={"/contact"}
                    className="text-xl font-bold text-black text-opacity-60 hover:border-b-0 hover:text-opacity-100"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <div className="content bg-transparent">{props.children}</div>
        </div>
      </div>
      <InstituteSwitches links={props.instituteLinks || []} />
    </div>
  );
};

export { Main };
