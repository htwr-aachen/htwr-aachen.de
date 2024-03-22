import Link from "next/link";
import { useContext, type Dispatch, type FC, type SetStateAction } from "react";

import { useInstituteActive } from "@/hooks/layout";
import type { NavbarConfig } from "@/models/layout";

import { SidenavButton } from "./SidenavButton";
import { FacultiesNavContext } from "../faculties-nav/nav";

type SidenavProps = {
  menuOpen: boolean;
  instituteName: string;
  config: NavbarConfig;
};

const Sidenav: FC<SidenavProps> = ({
  menuOpen,
  instituteName,
  config,
}) => {
  const [_open, setOpen] = useContext(FacultiesNavContext)
  const isActive = useInstituteActive(instituteName);
  return (
    <aside
      className={`fixed bg-white transition-all ${menuOpen
          ? "global-nav-panel right-0 top-0 z-30 h-full w-[275px] opacity-100"
          : "right-[-300px] -z-50 opacity-0"
        }`}
    >
      <div className="global-nav-panel-inner w-full">
        <div className="w-full p-2">
          <input
            className="w-full text-ellipsis whitespace-nowrap rounded bg-[#d1d1d1] px-3 py-2 text-sm text-[#333] placeholder:text-[#333]"
            type="search"
            placeholder="Suche (hättest du gerne)"
          />
        </div>
        <button
          type="button"
          role={"navigation"}
          className="block w-full bg-rwth-accent px-2 py-3 text-left font-thin text-white"
          onClick={() => {
            setOpen((x) => !x);
          }}
        >
          FAKULTÄTEN UND <br /> EINRICHTUNG
        </button>
        <Link
          href="/"
          className="block w-full border-t-1 border-dotted bg-rwth-accent px-2 py-3 font-thin text-white hover:border-b-0 hover:border-white"
        >
          Hauptseite der HTWR
        </Link>
        <div>
          {config.linkElements.map((link) => {
            return (
              <div key={link.name}>
                <h1 className="bg-[#ececec] p-2 font-bold opacity-75">
                  {link.name}
                </h1>
                <ul>
                  <SidenavButton href={link.href} isActive={isActive(link.path)}>
                    {link.name}
                  </SidenavButton>
                  {link?.links?.map((subLink) => {
                    return (
                      <SidenavButton
                        href={subLink.href}
                        isActive={isActive(subLink.path)}
                        key={subLink.href}
                      >
                        {subLink.name}
                      </SidenavButton>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidenav;
