import type { ReactNode } from "react";
import { SysComNav } from "./nav";
import { NavbarConfig } from "@/models/layout";
import { Institutes } from "@/config/institutes";
import { SysComFooter } from "./footer";

const SysComLayout = (props: {
  children: ReactNode;
  institute: Institutes;
  prefix: string;
  nav: NavbarConfig;
}) => {
  return (
    <div className="bg-rwth-branding light min-h-screen">
      <SysComNav config={props.nav} />
      <div className="pt-40 md:pt-24 lg:min-h-[calc(100vh-310px)]">
        {props.children}
      </div>
      <SysComFooter institute={props.institute} />
    </div>
  );
};

export default SysComLayout;
