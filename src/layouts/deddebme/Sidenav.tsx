"use client";

import type { HTMLAttributes } from "react";

import type { LinkElement, NavbarConfig } from "@/models/layout";

function SidenavLink(
  props: { level: number } & LinkElement & HTMLAttributes<HTMLAnchorElement>
) {
  const link =
    props.level <= 1 ? (
      <a
        href={props.url}
        className="no-b block w-full border-l-4 border-rwth-warn bg-rwth-accent/95 px-3 py-1 text-white"
        {...props}
      >
        {props.name}
      </a>
    ) : (
      <a href={props.url} {...props}>
        {props.name}
      </a>
    );
  return (
    <>
      {link}
      <ul className="mb-1 pl-6">
        {props.links?.map((l) => (
          <li key={l.path} className="w-full">
            <SidenavLink level={props.level + 1} {...l} />
          </li>
        ))}
      </ul>
    </>
  );
}

type DeddebmeSidenavProps = {
  config: NavbarConfig;
};

export function DeddebmeSidenav(props: DeddebmeSidenavProps) {
  return (
    <div className="mr-5 flex w-52 flex-col text-sm">
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
