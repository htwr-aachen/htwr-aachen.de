"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, type Dispatch, type SetStateAction } from "react";

import { useInstituteActive } from "@/hooks/layout";

import { MenuButton } from "./MenuButton";
import { FacultiesNavContext } from "../faculties-nav/nav";

type SYSCOMNavbarProps = {
};

export default function SYSCOMNavbar(props: SYSCOMNavbarProps) {
  const pathname = usePathname();
  const isActive = useInstituteActive("syscom");
  const [_open, setOpen] = useContext(FacultiesNavContext)

  return (
    <div className="pt-3">
      <nav className="h-[210px] grid md:grid-cols-2 grid-cols-[30%_1fr] h-{200px} bg-white border-blue-500 border-4 rounded-2xl ml-{-2px} mr-{-2px} p-4">
        <div className="self-center justify-self-center">
          <button
            type="button"
            className="m-2 rounded bg-gray-200 px-2 py-1 hover:bg-gray-300"
            onClick={() => {
              setOpen((x) => !x);
            }}
          >
            Fakultäten & Institute
          </button>
          <Link href="/syscom" className="no-b">
            <Image
              src={"/assets/syscom/syscom.png"}
              width={366}
              height={118}
              alt="ComSys Logo"
              className="w-{366px} h-{118px}"
            />
          </Link>
        </div>
        <div className="block">
          <div className="grid justify-end">
            <Link
              href={"/"}
              className="no-b asd"
              title="Zurück zur HTWR Hauptseite"
            >
              <Image
                src={"/assets/rwth/htwr.png"}
                width={150}
                height={41}
                alt="RWTH Aachen Logo"
              />
            </Link>
          </div>
          <ul className="grid grid-cols-5">
            <MenuButton
              src="/assets/syscom/home.png"
              src_hover="/assets/syscom/home_hover.png"
              alt="Home Icon"
              href="/syscom"
              name="HOME"
              isActive={pathname === "/syscom"}
            />
            <MenuButton
              src="/assets/syscom/team.png"
              src_hover="/assets/syscom/team_hover.png"
              alt="Team Icon"
              href="/syscom/team"
              name="TEAM"
              isActive={isActive("team")}
            />
            <MenuButton
              src="/assets/syscom/teaching.png"
              src_hover="/assets/syscom/teaching_hover.png"
              alt="Teaching Icon"
              href="/syscom/studium/teachings"
              name="TEACHING"
              isActive={isActive("teaching")}
            />
            <MenuButton
              src="/assets/syscom/research.png"
              src_hover="/assets/syscom/research_hover.png"
              alt="Research Icon"
              href="/syscom/research"
              name="RESEARCH"
              isActive={isActive("research")}
            />
            <MenuButton
              src="/assets/syscom/contact.png"
              src_hover="/assets/syscom/contact_hover.png"
              alt="Contact Icon"
              href="/contact"
              name="CONTACT"
              isActive={isActive("contact")}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
