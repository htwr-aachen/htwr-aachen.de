"use client";

import { RealInstituteConfig } from "@/config/institutes";
import { useInstituteSearch } from "@/hooks/useInstituteSearch";
import { findAssociatedSubjects } from "@/lib/subjects";

import { SheetClose } from "../ui/sheet";
import FacultiesBreadcrumb from "./breadcrumb";
import { FacultiesNavHeading } from "./heading";
import { FacultiesNavContent } from "./nav";
import { FacultiesNavLink } from "./nav-link";

export function FacultiesDesktopNav() {
  const [filteredInstitute, searchInstitutes] = useInstituteSearch(
    Object.values(RealInstituteConfig).reverse()
  );

  return (
    <div
      className={`relative hidden overflow-hidden bg-rwth-accent px-32 text-white lg:block`}
    >
      <div className="relative hidden grid-rows-[auto_1fr] lg:grid">
        <div className="grid grid-cols-[1fr_auto] border-b-4 border-white/10 py-6">
          <FacultiesBreadcrumb />
          <SheetClose className="right-0 rounded bg-white/10 px-2 py-1 text-sm hover:bg-black/100">
            Schliessen
          </SheetClose>
        </div>
        <div className="grid grid-cols-[1fr_2fr_1fr] py-4">
          <div className="border-r-1 border-white/10 pr-4">
            <FacultiesNavHeading>
              {FacultiesNavContent.left.heading}
            </FacultiesNavHeading>
            <ul className="m-0 w-full">
              {FacultiesNavContent.left.links.map((link) => (
                <FacultiesNavLink
                  href={link.href}
                  tooltipContent={link.tooltip || ""}
                  tooltipPlace="right"
                  key={link.name}
                  subElement={link.subcontent}
                >
                  {link.content}
                </FacultiesNavLink>
              ))}
            </ul>
          </div>

          <div className="px-4">
            <FacultiesNavHeading>Lehrstühle und Institute</FacultiesNavHeading>
            <ul className="mb-2 grid grid-cols-2 gap-2">
              {filteredInstitute.map((institute) => {
                return (
                  <FacultiesNavLink
                    key={institute.name}
                    href={institute.href}
                    subElement={findAssociatedSubjects(institute.name)}
                    tooltipContent={institute.fullName}
                    tooltipPlace="bottom"
                  >{`${
                    institute?.displayName || institute.name.toUpperCase()
                  } (${institute.professor})`}</FacultiesNavLink>
                );
              })}
            </ul>
            <div className="col-span-2 grid grid-cols-2 border-t-4 border-white/10 pb-2 pt-6">
              <FacultiesNavHeading>Institut suchen</FacultiesNavHeading>
              <div className="grid items-center justify-center">
                <input
                  className="rounded bg-white/10 px-2 py-1 text-sm"
                  placeholder="Search"
                  onInput={(e) => {
                    searchInstitutes(e.currentTarget.value);
                  }}
                ></input>
              </div>
            </div>
          </div>

          <div className="border-l-1 border-white/10 pl-4">
            <FacultiesNavHeading>
              {FacultiesNavContent.right.heading}
            </FacultiesNavHeading>
            <ul className="m-0 w-full">
              {FacultiesNavContent.right.links.map((link) => (
                <FacultiesNavLink
                  href={link.href}
                  tooltipContent={link.tooltip || ""}
                  tooltipPlace="right"
                  key={link.name}
                  subElement={link.subcontent}
                >
                  {link.content}
                </FacultiesNavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
