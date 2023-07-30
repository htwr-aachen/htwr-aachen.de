"use client";

import Image from "next/image";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

import { FakultätsNavMobile } from "../rwth/FakultätsNav";
import Navlink from "./Navlink";

type ESNavbarProps = {
  fakultätsNavOpen: boolean;
  setFakultätsNavOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ESNavbar(props: ESNavbarProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(-1);

  const dropdownCallback = (dropdownNumer: number) => {
    if (dropdownActive === dropdownNumer) setDropdownActive(-1);
    else setDropdownActive(dropdownNumer);
  };

  return (
    <nav
      id="navbar"
      className="navbar grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-center border-b-1 border-gray-400 py-4 lg:grid-cols-2 lg:grid-rows-none"
    >
      <div className="ml-8 flex flex-wrap items-center justify-center lg:ml-auto lg:mr-16 lg:justify-self-end">
        <button
          type="button"
          className="mr-3 rounded bg-gray-200 px-2 py-1 hover:bg-gray-300"
          onClick={() => {
            props.setFakultätsNavOpen((x) => !x);
            setNavOpen(true);
          }}
        >
          Fakultäten & Institute
        </button>
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
          <FakultätsNavMobile
            open={props.fakultätsNavOpen}
            setOpen={props.setFakultätsNavOpen}
          />
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
          <Navlink display={{ name: "Jobs", href: "/jobs" }} />
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
  );
}
