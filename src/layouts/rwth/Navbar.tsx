import type { FC } from "react";
import { useState } from "react";

import type { NavbarConfig } from "@/models/layout";

import { DesktopNavbar } from "./DesktopNavbar";
import { FakultätsNavMobile } from "./FakultätsNav";
import MenuButton from "./MenuButton";
import Sidenav from "./Sidenav";

type NavbarProps = {
  instituteName: string;
  instituteTitle: string;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  config: NavbarConfig;
};

const Navbar: FC<NavbarProps> = ({
  instituteName,
  menuOpen,
  setMenuOpen,
  config,
  instituteTitle,
}) => {
  const [fakultätOpen, setFakultätOpen] = useState(false);

  return (
    <>
      <button
        className={
          menuOpen
            ? "absolute z-50 h-full w-full bg-black opacity-20 transition-opacity"
            : "hidden"
        }
        type="button"
        title="Schließen"
        onClick={() => {
          if (fakultätOpen) setFakultätOpen(false);
          setMenuOpen(false);
        }}
      ></button>
      <div className="max-w-[1280px] lg:mx-auto">
        <DesktopNavbar
          onMenuClick={() => {
            setMenuOpen(true);
          }}
          instituteTitle={instituteTitle}
          fakultätOpen={fakultätOpen}
          setFakultätOpen={setFakultätOpen}
          config={config}
        >
          {config.linkElements.map((linkElement) => {
            return (
              <MenuButton
                href={linkElement.url}
                path={linkElement.path || linkElement.url}
                instituteName={instituteName}
                key={linkElement.name}
              >
                {linkElement.children
                  ? linkElement.children
                  : linkElement.name.toUpperCase()}
              </MenuButton>
            );
          })}
        </DesktopNavbar>
      </div>
      <Sidenav
        instituteName={instituteName}
        menuOpen={menuOpen}
        open={fakultätOpen}
        setOpen={setFakultätOpen}
        config={config}
      />
      <FakultätsNavMobile open={fakultätOpen} setOpen={setFakultätOpen} />
    </>
  );
};

export default Navbar;
