"use client";

import Link from "next/link";
import { useState } from "react";

import { StyledFacultiesButton } from "@/components/faculties-nav/button";

import Navlink from "./Navlink";

export default function ESNavbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(-1);

  const dropdownCallback = (dropdownNumber: number) => {
    if (dropdownActive === dropdownNumber) setDropdownActive(-1);
    else setDropdownActive(dropdownNumber);
  };

  return (
    <nav
      id="navbar"
      className="navbar grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-center border-b-1 border-gray-400 py-4 lg:grid-cols-2 lg:grid-rows-none"
    >
      <div className="ml-8 flex flex-wrap items-center justify-center lg:mr-16 lg:ml-auto lg:justify-self-end">
        <StyledFacultiesButton className="mr-3 flex flex-row items-center rounded bg-gray-200 px-2 py-1 hover:bg-gray-300" />
        <Link href={"/es"}>
          <img
            src={"/assets/es/es.png"}
            width={276}
            height={70}
            alt="ES Banner"
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
          <img src="/assets/menu.svg" alt={"Open Navbar"} className="size-8" />
        ) : (
          <img
            src="/assets/close.svg"
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
            isDropped={dropdownActive === 1}
            dropdownNumber={1}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "Research", href: "/es/research" }}
            links={[{ name: "Nichts", href: "/nichts?path=/es/research" }]}
            isDropped={dropdownActive === 2}
            dropdownNumber={2}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "Publications", href: "/es/publications" }}
            links={[{ name: "Nichts", href: "/nichts/publications" }]}
            isDropped={dropdownActive === 3}
            dropdownNumber={3}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "⚠Teaching", href: "/es/studium" }}
            links={[
              { name: "Klausuren", href: "/es/studium/klausuren" },
              { name: "Aufgaben", href: "/es/studium/aufgaben" },
              { name: "Zusammenfassungen", href: "/es/studium/teachings" },
            ]}
            isDropped={dropdownActive === 4}
            dropdownNumber={4}
            dropdownCallback={dropdownCallback}
          />
          <Navlink
            display={{ name: "Projects", href: "/es" }}
            links={[{ name: "Nichts", href: "/nichts?path=/es/projects" }]}
            isDropped={dropdownActive === 5}
            dropdownNumber={5}
            dropdownCallback={dropdownCallback}
          />
          <Navlink display={{ name: "Jobs", href: "/jobs" }} />
          <Navlink
            display={{ name: "About us", href: "/es" }}
            links={[
              { name: "About us", href: "/contact" },
              { name: "Contact", href: "/contact" },
            ]}
            isDropped={dropdownActive === 6}
            dropdownNumber={6}
            dropdownCallback={dropdownCallback}
          />
        </ul>
      </div>
    </nav>
  );
}
