import type { Institutes } from "@/config/institutes";
import type { Subjects } from "@/config/subjects";
import type { NavbarConfig } from "@/models/layout";
import { CloudAlert, Home, Network, Wifi } from "lucide-react";

export const institute: Institutes = "syscom"; // CHANGE_ME
export const subjects: Subjects[] = ["datkom", "mit"];

export const navbar: NavbarConfig = {
  logo: {
    href: "/assets/syscom/syscom_icon.svg",
  },
  main: {
    href: "/syscom",
    name: "SysCom",
  },
  linkElements: [
    {
      name: "Home",
      href: "/syscom",
      children: (
        <>
          <Home className="inline size-6 pr-2" />
          Home
        </>
      ),
    },
    {
      name: "datkom",
      href: "/syscom/datkom",
      children: (
        <>
          <Network className="inline size-6 pr-2" />
          DatKom
        </>
      ),
    },
    {
      name: "ait",
      href: "/syscom/ait",
      children: (
        <>
          <CloudAlert className="inline size-6 pr-2" />
          AIT
        </>
      ),
    },
    {
      name: "mit",
      href: "/syscom/mit",
      children: (
        <>
          <Wifi className="inline size-6 pr-2" />
          MIT
        </>
      ),
    },
  ],
};
