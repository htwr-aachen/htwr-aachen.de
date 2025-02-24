"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";

type SidenavButtonProps = {
  children: ReactNode;
  href: string;
};

const SidenavButton: FC<SidenavButtonProps> = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <li className="grid grid-cols-[1fr_auto] items-center border-y-1 border-dotted border-[#555]">
      <Link
        href={href}
        className={`block px-4 py-2 hover:border-b-0 ${
          pathname.startsWith(href.toString())
            ? "bg-rwth-accent text-white"
            : "text-rwth-accent"
        }`}
      >
        {children}
      </Link>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        className={`mr-3 h-[14px] ${
          pathname.startsWith(href.toString())
            ? "fill-white"
            : "fill-rwth-accent"
        }`}
      >
        <g>
          <g transform="matrix(-0.574927,0.574927,-0.653001,-0.653001,67.8709,13.3023)">
            <path d="M45.386,12.257C45.386,12.113 45.322,11.975 45.206,11.874C45.091,11.772 44.934,11.715 44.771,11.715C42.745,11.715 36.294,11.715 34.268,11.715C34.104,11.715 33.948,11.772 33.833,11.874C33.717,11.975 33.653,12.113 33.653,12.257C33.653,16.559 33.653,45.156 33.653,49.459C33.653,49.602 33.717,49.74 33.833,49.841C33.948,49.943 34.104,50 34.268,50C36.294,50 42.745,50 44.771,50C44.934,50 45.091,49.943 45.206,49.841C45.322,49.74 45.386,49.602 45.386,49.459C45.386,45.156 45.386,16.559 45.386,12.257Z" />
          </g>
          <g transform="matrix(0.574927,0.574927,-0.653001,0.653001,22.4293,-8.7439)">
            <path d="M45.386,12.257C45.386,12.113 45.322,11.975 45.206,11.874C45.091,11.772 44.934,11.715 44.771,11.715C42.745,11.715 36.294,11.715 34.268,11.715C34.104,11.715 33.948,11.772 33.833,11.874C33.717,11.975 33.653,12.113 33.653,12.257C33.653,16.559 33.653,45.156 33.653,49.459C33.653,49.602 33.717,49.74 33.833,49.841C33.948,49.943 34.104,50 34.268,50C36.294,50 42.745,50 44.771,50C44.934,50 45.091,49.943 45.206,49.841C45.322,49.74 45.386,49.602 45.386,49.459C45.386,45.156 45.386,16.559 45.386,12.257Z" />
          </g>
        </g>
      </svg>
    </li>
  );
};

export { SidenavButton };
