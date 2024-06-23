import type { ClassValue } from "clsx";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { LinkElement } from "@/models/layout";

function variants(level: number): ClassValue {
  switch (level) {
    case 0:
    case 1:
      return "no-b block w-full border-l-4 border-rwth-warn bg-rwth-accent/95 px-3 py-1 text-white";
    default:
      return "";
  }
}

export function SidenavLink(props: { level: number } & LinkElement) {
  return (
    <>
      <Link
        {...props}
        passHref
        href={props.href || ""}
        className={cn(variants(props.level))}
      >
        {props.name}
      </Link>
      <ul className="mb-1 pl-6">
        {props.links?.map((l) => (
          <li key={l.name + l.path} className="w-full">
            <SidenavLink level={props.level + 1} {...l} />
          </li>
        ))}
      </ul>
    </>
  );
}
