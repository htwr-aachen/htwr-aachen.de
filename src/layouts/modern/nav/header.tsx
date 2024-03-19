// HTWR-Modern layout navbar.
// This will be used when displaying content that is not directly related to RWTH or its chairs/institues (docs, blog,...)

import Link from "next/link";

import HTWRIcon from "@/components/icons/htwr";
import { ReactNode } from "react";
import NavMenu from "./nav";

export function Header(props: {
  nav: ReactNode;
  name: string;
  prefix: string;
}) {
  return (
    <header className="bg-background text-foreground grid grid-cols-[1fr_auto] px-16 py-6">
      <div className="flex flex-row items-center text-neutral-100">
        <Link href="/">
          <HTWRIcon height={30}></HTWRIcon>
        </Link>
        <svg
          className="ml-2 mr-1 text-foreground"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          viewBox="0 0 25 50"
          height={35}
        >
          <path d="M0 50L18 0" />
        </svg>
        <Link href={`/${props.prefix}`}>
          <span className="inline-block bg-gradient-to-r from-foreground to-secondary-foreground/70 bg-clip-text text-2xl font-light text-transparent hover:to-secondary-foreground/85">
            {props.name}
          </span>
        </Link>
      </div>
      <NavMenu nav={props.nav} />
    </header>
  );
}
