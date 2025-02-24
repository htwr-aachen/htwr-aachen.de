import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useId } from "react";

import { InternalLinkIcon } from "@/components/rwth/icons";

type FacultiesNavLinkProps = {
  children: ReactNode;
  href: string;
  subElement?: ReactNode;
  // autoBorder automatically removes the overlapping border of the middle elements
  autoBorder?: boolean;
  tooltipContent?: string;
  tooltipPlace?: "top" | "bottom" | "left" | "right";
};

export const FacultiesNavLink = (props: FacultiesNavLinkProps) => {
  const id = useId();
  return (
    <li
      className={`w-full border-t-1 border-dotted border-white/50 ${
        props.autoBorder ? "last: border-b-1" : "border-b-1"
      }`}
    >
      <Link
        data-tooltip-id={id}
        data-tooltip-content={props.tooltipContent}
        data-tooltip-place={props.tooltipPlace}
        href={props.href}
        passHref
        className="m-0 grid size-full grid-cols-[auto_1fr_auto] items-center px-4 py-2 text-sm font-medium text-white hover:border-b-0 hover:bg-white/10 lg:px-0"
      >
        <div className="ml-2 block">
          <InternalLinkIcon className="mr-2 inline size-[13px]" />
          {props.children}
          {props.subElement && (
            <span className="block font-sans text-sm font-light text-white lg:mb-3">
              {props.subElement}
            </span>
          )}
        </div>

        <ChevronRight className="mr-3 ml-auto size-[13px] md:hidden" />
      </Link>
    </li>
  );
};
