import type { ReactNode } from "@mdx-js/react/lib";

import { getNavbarConfig } from "@/data/layout";
import type { Institutes } from "@/models/institutes";

import DeddebmeNavbar from "./Navbar";
import { DeddebmeSidenav } from "./Sidenav";

type DeddebmeLayoutProps = {
  children: ReactNode;
  institute?: Institutes;
};

// Layout for deddebme(embedded) pages
export default function DeddebmeLayout(props: DeddebmeLayoutProps) {
  const navbarConfig = getNavbarConfig(props.institute || "DEDDEBME");
  return (
    <div className="">
      <DeddebmeNavbar config={navbarConfig} />
      <div className="mx-auto grid max-w-6xl antialiased md:grid-cols-[auto_1fr]">
        <DeddebmeSidenav config={navbarConfig} />

        <div className="px-5 ">{props.children}</div>
      </div>
    </div>
  );
}
