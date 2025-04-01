"use client";

import Link from "next/link";
import { useState } from "react";

import { FacultiesButton } from "@/components/faculties-nav/button";

import Navlink from "./Navlink";
import ExportedImage from "next-image-export-optimizer";
import MenuOpen from "@/public/assets/menu.svg";
import MenuClose from "@/public/assets/close.svg";

export default function ESNavbar() {
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
      <div className="ml-8 flex flex-wrap items-center justify-center lg:mr-16 lg:ml-auto lg:justify-self-end">
        <FacultiesButton className="mr-3 rounded bg-gray-200 px-2 py-1 hover:bg-gray-300">
          Fakultäten & Institute
        </FacultiesButton>
        <Link href={"/es"}>
          <ExportedImage
            src={"/assets/es/es.png"}
            width={276}
            height={70}
            alt="ComSys Logo"
            className="aspect-auto h-[70px]"
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
          <ExportedImage
            src={MenuOpen}
            alt={"Open Navbar"}
            className="size-8"
          />
        ) : (
          <ExportedImage
            src={MenuClose}
            alt={"Close Navbar"}
            className="size-8"
          />
        )}
      </button>
      <div className="col-span-2 mr-2 flex justify-center justify-self-end lg:col-span-1 lg:mr-auto lg:block lg:justify-start">
        <ul
          className={`flex-col lg:flex lg:flex-row ${
            navOpen ? "flex" : "hidden"
          }`}
        >
          <Navlink
            display={{ name: "Essays", href: "/es/essays" }}
            links={[{ name: "Nichts", href: "/nichts?path=/essays" }]}
            isDroped={dropdownActive === 1}
            dropdownNumer={1}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "Research", href: "/es/research" }}
            links={[{ name: "Nichts", href: "/nichts?path=/es/research" }]}
            isDroped={dropdownActive === 2}
            dropdownNumer={2}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "Publications", href: "/es/publications" }}
            links={[{ name: "Nichts", href: "/nichts/publications" }]}
            isDroped={dropdownActive === 3}
            dropdownNumer={3}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "⚠Teaching", href: "/es/studium" }}
            links={[
              { name: "Klausuren", href: "/es/studium/klausuren" },
              { name: "Aufgaben", href: "/es/studium/aufgaben" },
              { name: "Zusammenfassungen", href: "/es/studium/teachings" },
            ]}
            isDroped={dropdownActive === 4}
            dropdownNumer={4}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "Projects", href: "/es" }}
            links={[{ name: "Nichts", href: "/nichts?path=/es/projects" }]}
            isDroped={dropdownActive === 5}
            dropdownNumer={5}
            dropdownCallback={dropdownCallback}
          />
          <Navlink display={{ name: "Jobs", href: "/jobs" }} />
          <Navlink
            display={{ name: "About us", href: "/es" }}
            links={[
              { name: "About us", href: "/contact" },
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
