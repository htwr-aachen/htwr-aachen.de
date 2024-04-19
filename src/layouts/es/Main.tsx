import Link from "next/link";

import InstituteSwitches from "@/components/InstituteSwitches";
import type { LayoutProps } from "@/models/layout";

import ESNavbar from "./Navbar";

type ESLayoutProps = LayoutProps;

export function Main(props: ESLayoutProps) {
  return (
    <div className="es bg-white text-black">
      <ESNavbar />

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
