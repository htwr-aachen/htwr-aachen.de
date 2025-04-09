"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FacultiesButton } from "@/components/faculties-nav/button";
import { useInstituteActive } from "@/hooks/layout";

import { MenuButton } from "./MenuButton";
import Image from "next/image";

export default function SYSCOMNavbar() {
  const pathname = usePathname();
  const isActive = useInstituteActive("syscom");

  return (
    <div className="pt-3">
      <nav className="h-{200px} ml-{-2px} mr-{-2px} grid h-[210px] grid-cols-[30%_1fr] rounded-2xl border-4 border-blue-500 bg-white p-4 md:grid-cols-2">
        <div className="self-center justify-self-center">
          <FacultiesButton asChild>
            <button className="m-2 rounded bg-gray-200 px-2 py-1 hover:bg-gray-300">
              Fakultäten & Institute
            </button>
          </FacultiesButton>
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
              href="/nichts?path=/syscom/team"
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
              href="/nichts?path=/syscom/research"
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
