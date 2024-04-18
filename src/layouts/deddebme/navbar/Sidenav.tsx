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
          <li key={link.path} className="w-full">
            <SidenavLink level={1} {...link} />
          </li>
        ))}
      </ul>
      <div>
        <button
          className="mt-10 border-2 border-rwth-accent px-2 font-bold text-rwth-accent"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("Mach PSP weiter");
          }}
        >
          Anmelden
        </button>
      </div>
    </div>
  );
}
