import Image from "next/image";
import Link from "next/link";

import type { NavbarConfig } from "@/models/layout";

type DeddebmeNavbarProps = {
  config: NavbarConfig;
};

export default function DeddebmeNavbar(props: DeddebmeNavbarProps) {
  return (
    <nav className="grid grid-cols-2 items-center justify-items-center">
      <span className="font-semibold text-rwth-accent">
        Professor Dr.-Ing. Stefan Kowalewski
      </span>

      <div className="flex w-full justify-end">
        <Link href={props.config.logo.href} className="no-b">
          <Image
            alt={props.config.logo.alt}
            src={props.config.logo.logoUrl}
            width={props.config.logo.width}
            height={props.config.logo.height}
          />
        </Link>
      </div>
    </nav>
  );
}
