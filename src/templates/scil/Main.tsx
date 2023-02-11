import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useState } from "react";

import MenuButton from "./MenuButton";
import { SidenavButton } from "./SidenavButton";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
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
          onClick={() => {
            setMenuOpen(false);
          }}
        ></button>
        <div className="max-w-[1280px] lg:mx-auto">
          <nav className="relative w-full">
            <div
              className="branding hidden border-t-[40px] border-black bg-rwth-branding lg:block"
              role="banner"
            >
              <div className="mx-auto max-w-[980px]">
                <div className="branding-inner relative ml-5 grid grid-cols-[auto_1fr]">
                  <div className="logo">
                    <Link href="/scil">
                      <Image
                        className="relative top-[-40px] border-1 border-[#ccc] bg-rwth-bg"
                        alt="scil logo"
                        src={"/assets/scil/scil.svg"}
                        width={385}
                        height={110}
                      />
                    </Link>
                  </div>
                  <h2 className="absolute top-[-40px] left-[400px] flex h-[40px] cursor-pointer items-center justify-center px-4 text-sm text-white hover:bg-[#666]">
                    FAKULTÄTEN UND EINRICHTUNGEN
                  </h2>
                  <h2 className="logo-extension pt-3 pl-5 text-lg font-normal">
                    Lehrstuhl für 7 Informatik (Theorie und Logik Systeme
                    diskreter)
                  </h2>
                  <div className="absolute top-[-40px] right-0 flex h-[40px] items-center justify-center text-white">
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
                <ul className="mr-5 flex flex-row justify-end">
                  <MenuButton href="/scil/studium" active={isActive("studium")}>
                    STUDIUM
                  </MenuButton>
                  <MenuButton
                    href="/scil/forschung"
                    active={isActive("forschung")}
                  >
                    FORSCHUNG
                  </MenuButton>
                  <MenuButton
                    href="/scil/lehrstuhl"
                    active={isActive("lehrstuhl")}
                  >
                    DER LEHRSTUHL
                  </MenuButton>
                </ul>
              </div>
            </div>
            <div className="header grid h-[53px] grid-cols-2 bg-black lg:hidden">
              <div className="grid items-center justify-center justify-self-start">
                <Link
                  href={"/scil"}
                  className="logo grid h-full items-center bg-white px-3"
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
                  className="m-0 grid h-full w-[53px] items-center justify-center"
                  type="button"
                  onClick={() => {
                    setMenuOpen(true);
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

          <div className="m-0 w-full bg-rwth-bg py-12">
            <div className="mx-auto w-full max-w-[980px]">{props.children}</div>
          </div>
        </div>
        <footer className="mx-auto border-t-1 bg-[#333] py-12 text-white lg:max-w-[1280px]">
          <div className="pointer-events-none left-0 grid w-full grid-cols-1 grid-rows-2 lg:fixed lg:bottom-10 lg:grid-cols-2 lg:grid-rows-1 lg:px-4">
            <div className="bottom-10 my-3 justify-self-center lg:justify-self-start">
              <Link
                href="/es"
                className="pointer-events-auto rounded-md bg-black py-2 px-3 text-white transition-transform hover:scale-105 lg:ml-4"
              >
                &lt; Zur ES/SWT Website
              </Link>
            </div>
          </div>

          <div className="py-12 text-center">
            <Link href={"/impressum"} className="text-white">
              Impressum
            </Link>{" "}
            &{" "}
            <Link href={"/datenschutz"} className="text-white">
              Datenschutz
            </Link>{" "}
            & Bitte alles mit Humor nehmen.
          </div>
        </footer>
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
