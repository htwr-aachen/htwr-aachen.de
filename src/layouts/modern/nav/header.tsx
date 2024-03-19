// HTWR-Modern layout navbar.
// This will be used when displaying content that is not directly related to RWTH or its chairs/institues (docs, blog,...)

import Link from "next/link";

import HTWRLogo from "./logo";
import NavMenu from "./nav";

export function Nav(props: { name: string; prefix: string }) {
  return (
    <header className="bg-bg-200 text-bg-900 grid-cols-[1fr_auto] grid px-16 py-6">
      <div className="flex flex-row items-center text-neutral-100">
        <Link href="/">
          <HTWRLogo height={30}></HTWRLogo>
        </Link>
        <svg
          className="ml-2 mr-1 text-neutral-100"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          viewBox="0 0 25 50"
          height={35}
        >
          <path d="M0 50L18 0" />
        </svg>
        <Link href={"/" + props.prefix}>
          <span className="inline-block bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-2xl font-light text-transparent hover:to-neutral-50">
            {props.name}
          </span>
        </Link>
      </div>

      <NavMenu></NavMenu>
    </header>
  );
}
