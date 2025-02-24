import Link from "next/link";

import InstituteSwitches from "@/components/InstituteSwitches";
import type { LayoutProps } from "@/models/layout";

import SYSCOMHead from "./Head";
import SYSCOMNavbar from "./Navbar";

type SYSCOMSProps = LayoutProps;

export function Main(props: SYSCOMSProps) {
  return (
    <div className="bg-white text-black">
      <div className="mx-auto px-1 text-gray-700 antialiased md:max-w-[910px]">
        <SYSCOMHead />
        <div className="md:max-w-{910px}">
          <SYSCOMNavbar />

          <div className="content mt-6 rounded-2xl border-4 border-blue-500 bg-white p-6 text-xl">
            {props.children}
          </div>
        </div>
      </div>
      <footer className="lg:py-20">
        <InstituteSwitches institute={props.institute} />
        <div className="z-50 text-center text-sm">
          Dies ist (leider) nicht die echte ComSys-Lehrstuhl Webseite.{" "}
          <Link href={"/impressum"}>Impressum </Link> &{" "}
          <Link href={"/datenschutz"}>Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}
