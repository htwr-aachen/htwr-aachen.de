"use client";

import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";
import { FakultätsNav } from "@/layouts/rwth/FakultätsNav";
import type { LayoutProps } from "@/models/layout";

import Meta from "./Meta";
import ESNavbar from "./Navbar";

type ESLayoutProps = LayoutProps;

export function Main(props: ESLayoutProps) {
  const [fakultätsNavOpen, setFakultätsNavOpen] = useState(false);

  return (
    <div className="es font-roboto">
      <Meta />
      {props.meta}
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

      <ESNavbar
        fakultätsNavOpen={fakultätsNavOpen}
        setFakultätsNavOpen={setFakultätsNavOpen}
      />

      <div className="container mx-auto max-w-[1000px] px-8 py-12 lg:px-0">
        {props.children}
      </div>
      <footer className="mt-12 border-t-1 py-12">
        <InstituteSwitches institute={props.institute} />

        <div className="py-12 text-center">
          <Link href={"/impressum"}>Impressum</Link> &{" "}
          <Link href={"/datenschutz"}>Datenschutz</Link> & Bitte alles mit Humor
          nehmen.
        </div>
      </footer>
    </div>
  );
}
