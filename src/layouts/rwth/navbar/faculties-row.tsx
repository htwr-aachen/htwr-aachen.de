import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { NavbarLogo } from "@/models/layout";

import { FacultiesButton } from "./faculties-button";
import { Search } from "./search";

export function FacultiesRow({ logo }: { logo: NavbarLogo }) {
  return (
    <div className="h-10 overflow-x-clip overflow-y-visible bg-black md:block">
      <div className="mx-auto hidden max-w-[980px] grid-cols-[auto_1fr_auto] gap-3 lg:grid">
        <Link
          href={logo.href || "/"}
          className="no-b z-10 h-full overflow-y-visible"
        >
          <Image
            {...logo}
            className={cn("max-w-[350px] overflow-clip bg-white")}
            alt={logo.alt}
            width={logo.width || 224}
            height={logo.width || 110}
          ></Image>
        </Link>
        <FacultiesButton></FacultiesButton>
        <Search></Search>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] lg:hidden">
        <Link
          href={logo.href || "/"}
          className="no-b relative z-10 h-full w-20"
        >
          <Image
            className={cn("max-h-10 overflow-clip object-scale-down")}
            alt={logo.alt}
            src={logo.src}
            fill
          ></Image>
        </Link>
        <div></div>
        <SheetTrigger asChild>
          <Button variant="outline" className="border-l text-white" size="icon">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
      </div>
    </div>
  );
}
