import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";

import Navlink from "./Navlink";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(-1);

  const dropdownCallback = (dropdownNumer: number) => {
    if (dropdownActive === dropdownNumer) setDropdownActive(-1);
    else setDropdownActive(dropdownNumer);
  };

  return (
    <div className="es font-roboto">
      {props.meta}
      <nav
        id="navbar"
        className="navbar grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-center border-b-1 border-gray-400 py-4 lg:grid-cols-2 lg:grid-rows-none"
      >
        <div className="ml-8 lg:ml-auto lg:mr-16 lg:justify-self-end">
          <Link href={"/es"}>
            <Image
              src={"/assets/es/es.png"}
              width={276}
              height={70}
              alt="ComSys Logo"
              className="aspect-auto h-[70px] w-[276]"
            />
          </Link>
        </div>
        <button
          type="button"
          className="mr-5 lg:hidden"
          onClick={() => {
            setNavOpen((x) => !x);
          }}
        >
          {!navOpen ? (
            <Image
              src={"/assets/menu.svg"}
              height={32}
              width={32}
              alt={"Open Navbar"}
            ></Image>
          ) : (
            <Image
              src={"/assets/close.svg"}
              height={32}
              width={32}
              alt={"Close Navbar"}
            ></Image>
          )}
        </button>
        <div className="col-span-2 mr-2 flex justify-center justify-self-end lg:col-span-1 lg:mr-auto lg:block lg:justify-start">
          <ul
            className={`flex-col lg:flex lg:flex-row ${
              navOpen ? "flex" : "hidden"
            }`}
          >
            <Navlink
              display={{ name: "Essays", href: "/es/eassys" }}
              links={[{ name: "Nichts", href: "/es/nichts" }]}
              isDroped={dropdownActive === 1}
              dropdownNumer={1}
              dropdownCallback={dropdownCallback}
            />
            <Navlink
              display={{ name: "Research", href: "/es" }}
              links={[{ name: "Nichts", href: "/es/nichts" }]}
              isDroped={dropdownActive === 2}
              dropdownNumer={2}
              dropdownCallback={dropdownCallback}
            />
            <Navlink
              display={{ name: "Publications", href: "/es" }}
              links={[{ name: "Nichts", href: "/es/nichts" }]}
              isDroped={dropdownActive === 3}
              dropdownNumer={3}
              dropdownCallback={dropdownCallback}
            />
            <Navlink
              display={{ name: "Teaching", href: "/es" }}
              links={[
                { name: "Klausuren", href: "/es/klausuren" },
                { name: "Aufgaben", href: "/es/aufgaben" },
                { name: "Teachings", href: "/es/teachings" },
              ]}
              isDroped={dropdownActive === 4}
              dropdownNumer={4}
              dropdownCallback={dropdownCallback}
            />
            <Navlink
              display={{ name: "Projects", href: "/es" }}
              links={[{ name: "Nichts", href: "/es/nichts" }]}
              isDroped={dropdownActive === 5}
              dropdownNumer={5}
              dropdownCallback={dropdownCallback}
            />
            <Navlink display={{ name: "Jobs", href: "/es/jobs" }} />
            <Navlink
              display={{ name: "About us", href: "/es" }}
              links={[
                { name: "About us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ]}
              isDroped={dropdownActive === 6}
              dropdownNumer={6}
              dropdownCallback={dropdownCallback}
            />
          </ul>
        </div>
      </nav>
      <div className="container mx-auto max-w-[1000px] py-12 px-8 lg:px-0">
        {props.children}
      </div>
      <footer className="mt-12 border-t-1 py-12">
        <InstituteSwitches
          links={[
            { name: "SYSCOM/DATCOM", url: "/syscom" },
            { name: "SCIL/BUK", url: "/scil" },
          ]}
        />

        <div className="py-12 text-center">
          <Link href={"/impressum"}>Impressum</Link> &{" "}
          <Link href={"/datenschutz"}>Datenschutz</Link> & Bitte alles mit Humor
          nehmen.
        </div>
      </footer>
    </div>
  );
};

export { Main };
