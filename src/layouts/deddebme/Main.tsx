import InstituteSwitches from "@/components/InstituteSwitches";
import type { Institutes } from "@/config/institutes";
import type { NavbarConfig } from "@/models/layout";

import { DefaultDeddebmeNavbar } from "./default-navbar";
import DeddebmeNavbar from "./navbar/Navbar";
import { DeddebmeSidenav } from "./navbar/Sidenav";
import { ReactNode } from "react";

type DeddebmeLayoutProps = {
  children: ReactNode;
  institute: Institutes;
  navbar?: NavbarConfig;
};

// Layout for deddebme(embedded) pages
export default function DeddebmeLayout({
  children,
  institute,
  navbar = DefaultDeddebmeNavbar,
}: DeddebmeLayoutProps) {
  return (
    <div className="deddebme min-h-screen bg-stone-50 text-stone-900">
      <DeddebmeNavbar config={navbar} />
      <div className="mx-auto grid max-w-6xl antialiased md:grid-cols-[auto_1fr]">
        <DeddebmeSidenav config={navbar} />

        <div className="px-5">{children}</div>
      </div>
      <InstituteSwitches institute={institute} />
    </div>
  );
}
