"use client";

import { DefaultNavbar } from "@/app/navbar";
import { cn } from "@/lib/utils";

import type { LayoutProps, NavbarConfig } from "../../models/layout";
import SharedPushNotify from "../SharedPushNotify";
import Footer from "./Footer";
import Navbar from "./navbar";

type RWTHProps = {
  limitWidth?: boolean;
  navbar?: NavbarConfig;
  addPadding?: boolean;
};

type MainProps = LayoutProps & RWTHProps;

const Main = ({
  institute,
  navbar,
  limitWidth,
  addPadding = true,
  children,
}: MainProps) => {
  return (
    <div className={`${institute} relative bg-[#e5e5e5] text-black`}>
      <div className="min-h-screen w-full max-w-screen-xl lg:mx-auto">
        <Navbar config={navbar || DefaultNavbar} institute={institute} />
        <SharedPushNotify />
        <div className={cn("m-0 w-full bg-rwth-bg", addPadding && "py-12")}>
          <div className={`mx-auto w-full ${!limitWidth && "max-w-[980px]"}`}>
            {children}
          </div>
        </div>
        <Footer institute={institute} />
      </div>
    </div>
  );
};

export { Main };
