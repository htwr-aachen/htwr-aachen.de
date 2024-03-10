"use client";

import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";
import { FakultätsNav, FakultätsNavMobile } from "@/layouts/rwth/FakultätsNav";
import type { LayoutProps } from "@/models/layout";

import SYSCOMHead from "./Head";
import SYSCOMNavbar from "./Navbar";

type SYSCOMSProps = LayoutProps;

export function Main(props: SYSCOMSProps) {
  const [fakultätsNavOpen, setFakultätsNavOpen] = useState(false);

  return (
    <div>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {fakultätsNavOpen && (
            <FakultätsNav
              open={fakultätsNavOpen}
              setOpen={setFakultätsNavOpen}
            />
          )}
        </AnimatePresence>
      </LazyMotion>
      <div className="mx-auto px-1 text-gray-700 antialiased md:max-w-[910px]">
        <SYSCOMHead />
        {props.meta}
        <div className="md:max-w-{910px}">
          <SYSCOMNavbar setFakultätsNavOpen={setFakultätsNavOpen} />

          <div className="content mt-6 rounded-2xl border-4 border-blue-500 bg-white p-6 text-xl">
            {props.children}
          </div>
        </div>
      </div>
      <footer className="lg:py-20">
        <InstituteSwitches
          links={[
            { name: "CIGOL/MALO", url: "/cigol" },
            { name: "ES/SWT", url: "/es" },
          ]}
          institute={props.institute}
        />
        <div className=" z-50 text-center text-sm">
          Dies ist (leider) nicht die echte ComSys-Lehrstuhl Webseite.{" "}
          <Link href={"/impressum"}>Impressum </Link> &{" "}
          <Link href={"/datenschutz"}>Datenschutz</Link>
        </div>
      </footer>
      {fakultätsNavOpen && (
        <div>
          <FakultätsNavMobile
            open={fakultätsNavOpen}
            setOpen={setFakultätsNavOpen}
          />
        </div>
      )}
    </div>
  );
}
