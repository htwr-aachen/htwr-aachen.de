import Link from "next/link";

import { SheetContent } from "@/components/ui/sheet";
import type { NavbarConfig } from "@/models/layout";

import { FacultiesButton } from "./faculties-button";
import { SidenavButton } from "./mobile-nav-link";

export default function MobileSidenav({ config }: { config: NavbarConfig }) {
  return (
    <SheetContent className="w-[300px] max-w-full bg-white p-0 text-black">
      <div className="w-full bg-white">
        <div className="w-full p-2">
          <input
            className="w-full text-ellipsis whitespace-nowrap rounded bg-[#d1d1d1] px-3 py-2 text-sm text-[#333] placeholder:text-[#333]"
            type="search"
            placeholder="Suche (hättest du gerne)"
          />
        </div>
        <FacultiesButton />
        <Link
          href="/"
          className="block w-full border-t-1 border-dotted bg-rwth-accent px-4 py-3 font-light text-white hover:border-b-0 hover:border-white"
        >
          Hauptseite der HTWR
        </Link>
        <div>
          {config.linkElements.map((link) => {
            return (
              <div key={link.name}>
                <h1 className=" p-2 font-bold opacity-75">{link.name}</h1>
                <ul className="ml-6">
                  <SidenavButton href={link.href.toString()}>
                    {link.name}
                  </SidenavButton>
                  {link?.links?.map((subLink) => {
                    return (
                      <SidenavButton
                        href={subLink.href.toString()}
                        key={subLink.name + subLink.href.toString()}
                      >
                        {subLink.children || subLink.name}
                      </SidenavButton>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SheetContent>
  );
}
