"use client";

import Image from "next/image";
import Link from "next/link";

import { FacultiesButton } from "@/components/faculties-nav/button";
import { type NavbarConfig, toValue } from "@/models/layout";

type DeddebmeNavbarProps = {
  config: NavbarConfig;
};

export default function DeddebmeNavbar(props: DeddebmeNavbarProps) {
  return (
    <div>
      <nav className="mx-auto my-4 grid max-w-6xl grid-cols-2 items-center justify-items-center">
        <div className="pt-4 text-center">
          <span className="text-rwth-accen mr-4 content-center text-center font-semibold">
            Professor Dr.-Ing. Stefan Kowalewski
          </span>
          <FacultiesButton
            type="button"
            className="mx-auto mr-3 rounded bg-accent px-2 py-1 text-stone-50 hover:bg-accent/75"
          >
            Fakultäten & Institute
          </FacultiesButton>
        </div>

        <div className="flex w-full justify-end pt-5">
          <Link href={props.config.logo.href || "/"} className="no-b">
            <Image
              alt={props.config.logo.alt}
              src={props.config.logo.src}
              width={props.config.logo.width}
              height={props.config.logo.height}
            />
          </Link>
          <div
            className={`h-[${props.config.logo.height}px] mx-4 w-1 bg-rwth-accent`}
          />
          <Link href="/" className="no-b">
            <Image
              alt="RWTH LOGO"
              src="/assets/rwth/banner.svg"
              height={props.config.logo.height}
              width={toValue(props.config.logo.height, 0) * 3.66}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
