import type { ReactNode } from "react";
import { SysComNav } from "./nav";
import { NavbarConfig } from "@/models/layout";
import { Institutes } from "@/config/institutes";

const SysComLayout = (props: {
  children: ReactNode;
  institute: Institutes;
  prefix: string;
  nav: NavbarConfig;
}) => {
  return (
    <div className="bg-rwth-branding light text-black">
      <SysComNav config={props.nav} />
      <div className="py-24">{props.children}</div>
    </div>
  );
};

export default SysComLayout;
