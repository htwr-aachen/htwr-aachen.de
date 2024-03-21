import { m } from "framer-motion";

import { useInstituteSearch } from "@/hooks/useInstituteSearch";
import { getRealInstitutes } from "@/lib/institutes";
import { cn } from "@/lib/utils";

import { FacultiesNavHeading } from "./heading";
import type { FacultiesNavProps } from "./nav";
import { FacultiesNavLink } from "./nav-link";

export function FacultiesMobileNav({ open, setOpen }: FacultiesNavProps) {
  const [filteredInstitute, searchInstitutes] = useInstituteSearch(
    getRealInstitutes()
  );
  return (
    <m.div
      key={"FakultätsNav"}
      className={cn(
        "fixed top-0 h-full w-[275px] bg-rwth-accent text-white transition-all lg:hidden",
        open ? "right-0 z-50" : "right-[-300px] -z-50 opacity-0"
      )}
    >
      <div className="relative">
        <div className="border-y-1 border-dotted border-white/10 p-3">
          <button
            onClick={() => setOpen(false)}
            className="mr-4 rounded bg-white/10 px-2 py-1 text-sm hover:bg-black/100"
          >
            Zurück
          </button>
          <span>Sie sind hier:</span>
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
                      subElement={institute.subject}
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
    </m.div>
  );
}
