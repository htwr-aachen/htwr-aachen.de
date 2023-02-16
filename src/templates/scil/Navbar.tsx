import Image from "next/image";
import Link from "next/link";
import type { FC, MouseEvent, ReactNode } from "react";

export type NavbarProps = {
  onMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const Navbar: FC<NavbarProps> = ({ children, onMenuClick }) => {
  return (
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
      <div className="nav-global hidden bg-rwth-branding lg:block">
        <div className="mx-auto w-full max-w-[980px]">
          <ul className="mr-5 flex flex-row justify-end">{children}</ul>
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

export { Navbar };
