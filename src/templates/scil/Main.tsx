import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

import MenuButton from "./MenuButton";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();

  const isActive = (name: string): boolean => {
    return (
      router.pathname.startsWith(`/scil/${name}`) ||
      router.pathname.startsWith(`/${name}`)
    );
  };

  return (
    <div className="scil bg-[#e5e5e5] font-roboto">
      {props.meta}
      <div className="mx-auto max-w-[1280px]">
        <div
          className="branding border-t-[40px] border-black bg-rwth-branding"
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
                Lehrstuhl für 7 Informatik (Theorie und Logik Systeme diskreter)
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
        <div className="nav-global bg-rwth-branding">
          <div className="mx-auto w-full max-w-[980px]">
            <ul className="mr-5 flex flex-row justify-end">
              <MenuButton href="/scil/studium" active={isActive("studium")}>
                STUDIUM
              </MenuButton>
              <MenuButton href="/scil/forschung" active={isActive("forschung")}>
                FORSCHUNG
              </MenuButton>
              <MenuButton href="/scil/lehrstuhl" active={isActive("lehrstuhl")}>
                DER LEHRSTUHL
              </MenuButton>
            </ul>
          </div>
        </div>
        <div className="m-0 w-full bg-rwth-bg py-12">
          <div className="mx-auto w-full max-w-[980px]">{props.children}</div>
        </div>
      </div>
      <footer className="mx-auto border-t-1 bg-[#333] py-12 text-white lg:max-w-[1280px]">
        <div className="left-0 grid w-full grid-cols-1 grid-rows-2 lg:fixed lg:bottom-10 lg:grid-cols-2 lg:grid-rows-1 lg:px-4">
          <div className="bottom-10 my-3 justify-self-center lg:justify-self-start">
            <Link
              href="/es"
              className="rounded-md bg-black py-2 px-3 text-white transition-transform hover:scale-105 lg:ml-4"
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
  );
};

export { Main };
