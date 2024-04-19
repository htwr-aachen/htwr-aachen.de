"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";
import type { UrlObject } from "url";

export type MenuButtonProps = {
  href: string | UrlObject;
  children: ReactNode;
  path: string;
  instituteName?: string;
};

const MenuButton: FC<MenuButtonProps> = ({ href, children, path }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`block p-[28px_20px_30px] text-xl font-bold hover:border-b-0 ${
          pathname.startsWith(href.toString()) || pathname.startsWith(path)
            ? "bg-rwth-accent text-white"
            : "bg-rwth-branding text-black hover:bg-[#e6e6e6]"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuButton;
