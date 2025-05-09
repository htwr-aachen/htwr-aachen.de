import type { ReactNode } from "react";
import { SysComNav } from "./nav";
import { NavbarConfig } from "@/models/layout";
import { Institutes } from "@/config/institutes";
import { SysComFooter } from "./footer";
import { BannerContent } from "@/components/banner-provider";
import { BlogBannerContent } from "@/components/banner";

const SysComLayout = (props: {
  children: ReactNode;
  institute: Institutes;
  prefix: string;
  nav: NavbarConfig;
}) => {
  return (
    <div className="bg-rwth-branding light min-h-screen text-black">
      <SysComNav config={props.nav} />
      <BannerContent>
        <BlogBannerContent />
      </BannerContent>
      <div className="pt-40 md:pt-24 lg:min-h-[calc(100vh-310px)]">
        {props.children}
      </div>
      <SysComFooter institute={props.institute} />
    </div>
  );
};

export default SysComLayout;
