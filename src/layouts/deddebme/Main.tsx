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
    <div className="mx-auto max-w-6xl">
      <DeddebmeNavbar config={navbarConfig} />
      <div className="grid grid-cols-[auto_1fr]">
        <DeddebmeSidenav config={navbarConfig} />

        <div>{props.children}</div>
      </div>
    </div>
  );
}
