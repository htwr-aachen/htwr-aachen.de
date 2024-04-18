"use client";

import { RealInstituteConfig } from "@/config/institutes";
import { useInstituteSearch } from "@/hooks/useInstituteSearch";
import { findAssociatedSubjects } from "@/lib/subjects";

import { SheetClose } from "../ui/sheet";
import FacultiesBreadcrumb from "./breadcrumb";
import { FacultiesNavHeading } from "./heading";
import { type FacultiesNavProps } from "./nav";
import { FacultiesNavLink } from "./nav-link";

export function FacultiesMobileNav(_props: FacultiesNavProps) {
  const [filteredInstitute, searchInstitutes] = useInstituteSearch(
    Object.values(RealInstituteConfig)
  );
  return (
    <div className="bg-rwth-accent p-0 lg:hidden">
      <div className="relative">
        <div className="border-y-1 border-dotted border-white/10 p-3">
          <SheetClose className="mr-4 rounded bg-white/10 px-2 py-1 text-sm hover:bg-black/100">
            Zurück
          </SheetClose>
          <FacultiesBreadcrumb />
        </div>
        <div className="px-3 py-2">
          <input
            className="w-full rounded bg-white/10 px-2 py-1 text-sm"
            placeholder="Search"
            onInput={(e) => {
              searchInstitutes(e.currentTarget.value);
            }}
          ></input>
        </div>
        <div>
          <div className="">
            <FacultiesNavHeading>Fakultäten und Institute</FacultiesNavHeading>
            <div>
              <ul className="m-0 w-full">
                {filteredInstitute.map((institute) => {
                  return (
                    <FacultiesNavLink
                      key={institute.name}
                      href={institute.href}
                      subElement={findAssociatedSubjects(institute.name).join(
                        " | "
                      )}
                      tooltipContent={institute.fullName}
                      tooltipPlace="left"
                    >{`${institute.name} (${institute.professor})`}</FacultiesNavLink>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="border-l-1 border-white/10">
            <FacultiesNavHeading>Einrichtungen</FacultiesNavHeading>
            <ul className="m-0 w-full">
              <FacultiesNavLink href="/lernräume">Lernräume</FacultiesNavLink>
              <FacultiesNavLink href="/botmein">
                Hochschulsport
              </FacultiesNavLink>
              <FacultiesNavLink href="/getmeoutofhere">
                Exmatrikulieren
              </FacultiesNavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
