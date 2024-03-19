"use client";

import { useState } from "react";

import { DefaultNavbar } from "@/data/layout";
import { useInstituteConfig } from "@/hooks/useInstituteConfig";

import type { LayoutProps, NavbarConfig } from "../../models/layout";
import SharedPushNotify from "../SharedPushNotify";
import Footer from "./Footer";
import { HTWRHead } from "./Head";
import Navbar from "./Navbar";

type RWTHProps = {
  pad?: boolean;
  navbarConfig?: NavbarConfig;
};

type MainProps = LayoutProps & RWTHProps;

const Main = (props: MainProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const config = useInstituteConfig(props.institute);

  return (
    <div className="scil text-black relative bg-[#e5e5e5]">
      <HTWRHead />
      {props.meta}
      <div
        className={`relative  min-h-screen w-full transition-all ${
          menuOpen ? "left-[-275px] h-screen overflow-hidden" : "left-0"
        }`}
      >
        <Navbar
          instituteName={config.name || ""}
          instituteTitle={config.description || ""}
          config={props.navbarConfig || DefaultNavbar}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <div className="max-w-[1280px] lg:mx-auto">
          <SharedPushNotify />
        </div>
        <div className="max-w-[1280px] lg:mx-auto ">
          <div className="m-0 w-full bg-rwth-bg py-12">
            <div className={`mx-auto w-full ${!props.pad && "max-w-[980px]"}`}>
              {props.children}
            </div>
          </div>
        </div>
        <Footer institute={props.institute} />
      </div>
    </div>
  );
};

export { Main };
