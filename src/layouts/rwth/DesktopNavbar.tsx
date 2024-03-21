import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type {
  Dispatch,
  FC,
  MouseEvent,
  ReactNode,
  SetStateAction,
} from "react";

import type { NavbarConfig } from "@/models/layout";

import { FacultiesDesktopNav } from "../faculties-nav/desktop";

export type NavbarProps = {
  onMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  instituteTitle: string;
  fakultätOpen: boolean;
  setFakultätOpen: Dispatch<SetStateAction<boolean>>;
  config: NavbarConfig;
};

const DesktopNavbar: FC<NavbarProps> = ({
  children,
  onMenuClick,
  instituteTitle,
  fakultätOpen,
  setFakultätOpen,
  config,
}) => {
  return (
    <nav className="relative w-full">
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {fakultätOpen && <FacultiesDesktopNav></FacultiesDesktopNav>}
        </AnimatePresence>
      </LazyMotion>
      <div
        className="branding hidden border-t-[40px] border-black bg-rwth-branding lg:block"
        role="banner"
      >
        <div className="mx-auto max-w-[980px]">
          <div className="branding-inner relative ml-5 grid grid-cols-[auto_1fr]">
            <div className="logo">
              <Link href={config?.logo.href} className="hover:border-b-0">
                <Image
                  className="relative top-[-40px] bg-rwth-bg"
                  alt={config?.logo?.alt}
                  src={config?.logo?.logoUrl}
                  width={config?.logo.width || 224}
                  height={config.logo.height || 110}
                />
              </Link>
            </div>
            <button
              onClick={() => setFakultätOpen((x) => !x)}
              type="button"
              className={`absolute top-[-40px] flex h-[40px] cursor-pointer items-center justify-center px-4 text-sm text-white hover:bg-[#666]`}
              style={{ left: `${20 + (config?.logo.width || 224)}px` }}
            >
              FAKULTÄTEN UND EINRICHTUNGEN
            </button>
            <h2 className="logo-extension pl-5 pt-3 text-lg font-normal">
              {instituteTitle}
            </h2>
            <div className="absolute right-0 top-[-40px] flex h-[40px] items-center justify-center text-white">
              <input
                type={"search"}
                className="bg-[#666] pl-2 text-sm"
                placeholder="Search... bzw. nicht"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nav-global hidden bg-rwth-branding lg:block">
        <div className="mx-auto w-full max-w-[980px]">
          <ul className="mr-5 flex flex-row justify-end">{children}</ul>
        </div>
      </div>
      <div className="header grid h-[53px] grid-cols-2 bg-black lg:hidden">
        <div className="grid items-center justify-center justify-self-start">
          <Link
            href={config.main.href}
            className="logo grid h-full items-center bg-white px-3 hover:border-b-0"
          >
            <Image
              src={"/assets/rwth/htwr.png"}
              width={100}
              height={50}
              alt="htwr logo"
              className="bg-rwth-bg"
            />
          </Link>
        </div>
        <div className="grid justify-end">
          <button
            className="m-0 grid h-full w-[53px] items-center justify-center pr-5"
            type="button"
            onClick={(ev) => {
              onMenuClick(ev);
            }}
          >
            <Image
              src={"/assets/rwth/hamburger.svg"}
              width={28}
              height={28}
              alt="menu"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export { DesktopNavbar };
