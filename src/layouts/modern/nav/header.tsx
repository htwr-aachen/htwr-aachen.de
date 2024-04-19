// HTWR-Modern layout navbar.
// This will be used when displaying content that is not directly related to RWTH or its chairs/institues (docs, blog,...)

import Link from "next/link";
import type { ReactNode } from "react";

import HTWRIcon from "@/components/icons/htwr";

import NavMenu from "./nav";

export function Header(props: {
  nav: ReactNode;
  name: string;
  prefix: string;
}) {
  return (
    <header className="fixed top-0 z-50 grid h-36 w-full grid-rows-2 gap-6 border-b border-neutral-200 bg-background/[0.6]  px-16 py-6 text-foreground backdrop-blur-sm dark:border-white/[0.1] md:h-20 md:grid-cols-[1fr_auto] md:grid-rows-1">
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
