"use client"
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";
import { FakultätsNav, FakultätsNavMobile } from "@/layouts/rwth/FakultätsNav";

import Navlink from "./Navlink";
import { LayoutProps } from "@/models/layout";
import Meta from "./Meta";


type ESLayoutProps = LayoutProps

export function Main(props: ESLayoutProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [fakultätsNavOpen, setFakultätsNavOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(-1);

  const dropdownCallback = (dropdownNumer: number) => {
    if (dropdownActive === dropdownNumer) setDropdownActive(-1);
    else setDropdownActive(dropdownNumer);
  };

  return (
    <div className="es font-roboto">
      <Meta/>
      {props.meta}
      <AnimatePresence>
        {fakultätsNavOpen && (
          <FakultätsNav open={fakultätsNavOpen} setOpen={setFakultätsNavOpen} />
        )}
      </AnimatePresence>
      
      <div className="container mx-auto max-w-[1000px] px-8 py-12 lg:px-0">
        {props.children}
      </div>
      <footer className="mt-12 border-t-1 py-12">
        <InstituteSwitches
          institute={}
        />

        <div className="py-12 text-center">
          <Link href={"/impressum"}>Impressum</Link> &{" "}
          <Link href={"/datenschutz"}>Datenschutz</Link> & Bitte alles mit Humor
          nehmen.
        </div>
      </footer>
    </div>
  );

}
