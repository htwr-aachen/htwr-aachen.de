"use client";
import Link from "next/link";

import { SheetContent } from "@/components/ui/sheet";
import type { NavbarConfig } from "@/models/layout";

import { FacultiesButton } from "./faculties-button";
import { SidenavButton } from "./mobile-nav-link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function MobileSidenav({ config }: { config: NavbarConfig }) {
  return (
    <SheetContent
      className="w-[300px] max-w-full bg-white p-0 text-black"
      aria-description="Menu for the current sub site"
    >
      <VisuallyHidden>
        <DialogTitle>Subsite Menu</DialogTitle>
        <DialogDescription>Menu for the current subsite</DialogDescription>
      </VisuallyHidden>
      <div className="w-full bg-white">
        <div className="w-full p-2">
          <input
            className="w-full rounded bg-[#d1d1d1] px-3 py-2 text-sm text-ellipsis whitespace-nowrap text-[#333] placeholder:text-[#333]"
            type="search"
            placeholder="Suche (hättest du gerne)"
          />
        </div>
        <Link
          href="/"
          className="bg-rwth-accent block w-full border-t-1 border-dotted px-4 py-3 font-light text-white hover:border-b-0 hover:border-white"
        >
          Hauptseite der HTWR
        </Link>
        <div>
          {config.linkElements.map((link) => {
            return (
              <div key={link.name}>
                <h1 className="p-2 font-bold opacity-75">{link.name}</h1>
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
