import type { ReactNode } from "@mdx-js/react/lib";

import { getNavbarConfig } from "@/data/layout";
import { getInstituteByName } from "@/lib/institutes";
import type { StringInstitutes } from "@/models/institutes";

import DeddebmeNavbar from "./Navbar";
import { DeddebmeSidenav } from "./Sidenav";

type DeddebmeLayoutProps = {
  children: ReactNode;
  institute?: StringInstitutes;
};

// Layout for deddebme(embedded) pages
export default function DeddebmeLayout(props: DeddebmeLayoutProps) {
  const navbarConfig = getNavbarConfig(
    getInstituteByName(props.institute || "deddebme")
  );
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
