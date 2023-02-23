import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import type { LayoutProps } from "../../../models/layout";
import Footer from "./Footer";
import MenuButton from "./MenuButton";
import { Navbar } from "./Navbar";
import { SidenavButton } from "./SidenavButton";

type RWTHLayout = {
  instituteName: string;
  instituteTitle?: string;
};

type MainProps = LayoutProps & RWTHLayout;

const Main = (props: MainProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const isActive = (name: string): boolean => {
    return (
      router.pathname.startsWith(`/scil/${name}`) ||
      router.pathname.startsWith(`/${name}`)
    );
  };

  return (
    <div className="scil relative bg-[#e5e5e5] font-roboto">
      {props.meta}
      <div
        className={`relative w-full transition-all ${
          menuOpen ? "left-[-275px] h-screen overflow-hidden" : "left-0"
        }`}
      >
        <button
          className={
            menuOpen
              ? "absolute z-50 h-full w-full bg-black opacity-20 transition-opacity"
              : "hidden"
          }
          type="button"
          title="Schließen"
          onClick={() => {
            setMenuOpen(false);
          }}
        ></button>
        <div className="max-w-[1280px] lg:mx-auto">
          <Navbar
            onMenuClick={() => {
              setMenuOpen(true);
            }}
          >
            <MenuButton href="/scil/studium" active={isActive("studium")}>
              STUDIUM
            </MenuButton>
            <MenuButton href="/scil/forschung" active={isActive("forschung")}>
              FORSCHUNG
            </MenuButton>
            <MenuButton href="/scil/lehrstuhl" active={isActive("lehrstuhl")}>
              DER LEHRSTUHL
            </MenuButton>
          </Navbar>
        </div>
        <div className="max-w-[1280px] lg:mx-auto">
          <div className="m-0 w-full bg-rwth-bg py-12">
            <div className="mx-auto w-full max-w-[980px]">{props.children}</div>
          </div>
        </div>
        <Footer instituteLinks={props.instituteLinks || []} />
      </div>
      <div
        className={`fixed bg-white transition-all ${
          menuOpen
            ? "global-nav-panel top-0 right-0 z-50 h-full w-[275px] opacity-100"
            : "right-[-300px] -z-50 opacity-0"
        }`}
      >
        <div className="global-nav-panel-inner w-full">
          <div className="w-full p-2">
            <input
              className="w-full text-ellipsis whitespace-nowrap bg-[#d1d1d1] px-2 py-1 text-[#333] placeholder:text-[#333]"
              type="search"
              placeholder="Suche (hättest du gerne)"
            />
          </div>
          <h1 className="bg-rwth-accent px-2 py-3 font-thin text-white">
            FAKULTÄTEN UND <br /> EINRICHTUNG
          </h1>
          <Link
            href="/scil"
            className="block w-full bg-rwth-accent px-2 py-3 font-thin text-white"
          >
            Hauptseite der HTWR
          </Link>
          <div>
            <h1 className="bg-[#ececec] p-2 font-bold opacity-75">Studium</h1>
            <ul className="">
              <SidenavButton
                href="/scil/studium"
                isActive={isActive("studium")}
              >
                Studium
              </SidenavButton>
              <SidenavButton
                href="/scil/studium/klausuren"
                isActive={isActive("studium/klausuren")}
              >
                Klausuren
              </SidenavButton>
              <SidenavButton
                href="/scil/studium/aufgaben"
                isActive={isActive("studium/aufgaben")}
              >
                Aufgaben
              </SidenavButton>
              <SidenavButton
                href="/scil/studium/teachings"
                isActive={isActive("studium/teachings")}
              >
                Zusammenfassungen
              </SidenavButton>
            </ul>
          </div>
          <div>
            <h1 className="bg-[#ececec] p-2 font-bold opacity-75">Forschung</h1>
            <ul className="">
              <SidenavButton
                href="/scil/forschung"
                isActive={isActive("forschung")}
              >
                Forschung
              </SidenavButton>
              <SidenavButton
                href="/scil/forschung/allgemeines"
                isActive={isActive("forschung/allgemeines")}
              >
                All<b>Gemein</b>es
              </SidenavButton>
              <SidenavButton
                href="/scil/forschung/publikationen"
                isActive={isActive("forschung/publikationen")}
              >
                Publikationen
              </SidenavButton>
            </ul>
          </div>
          <div>
            <h1 className="bg-[#ececec] p-2 font-bold opacity-75">
              Der Lehrstuhl
            </h1>
            <ul className="">
              <SidenavButton
                href="/scil/lehrstuhl"
                isActive={isActive("lehrstuhl")}
              >
                Forschung
              </SidenavButton>
              <SidenavButton
                href="/scil/lehrstuhl/allgemeines"
                isActive={isActive("lehrstuhl/allgemeines")}
              >
                All<b>Gemein</b>
              </SidenavButton>
              <SidenavButton href="/contact" isActive={isActive("contact")}>
                Kontakt
              </SidenavButton>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
