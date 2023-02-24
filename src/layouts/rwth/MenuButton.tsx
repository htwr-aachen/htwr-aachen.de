import Link from "next/link";
import type { FC, ReactNode } from "react";

import { useIsActive } from "@/hooks/layout";

export type MenuButtonProps = {
  href: string;
  children: ReactNode;
  path: string;
  instituteName?: string;
};

const MenuButton: FC<MenuButtonProps> = ({
  href,
  children,
  path,
  instituteName = "",
}) => {
  const isActive = useIsActive(instituteName);

  return (
    <li>
      <Link
        href={href}
        className={`block p-[28px_20px_30px] text-xl font-bold hover:border-b-0 ${
          isActive(path)
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
