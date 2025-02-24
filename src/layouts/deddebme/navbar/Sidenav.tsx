"use client";

import type { NavbarConfig } from "@/models/layout";

import { SidenavLink } from "./sidenav-link";

type DeddebmeSidenavProps = {
  config: NavbarConfig;
};

export function DeddebmeSidenav(props: DeddebmeSidenavProps) {
  return (
    <div className="mx-5 my-10 flex flex-col text-sm md:my-0 md:ml-0 md:w-52">
      <ul className="w-full">
        {props.config.linkElements.map((link) => (
          <li key={link.name + link.path} className="w-full">
            <SidenavLink level={1} {...link} />
          </li>
        ))}
      </ul>
      <div>
        <button
          className="border-rwth-accent text-rwth-accent mt-10 border-2 px-2 font-bold"
          onClick={() => {
            alert("Mach PSP weiter");
          }}
        >
          Anmelden
        </button>
      </div>
    </div>
  );
}
