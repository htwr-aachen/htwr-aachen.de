import Link from "next/link";
import type { FC, ReactNode } from "react";

type MenuButtonProps = {
  href: string;
  children: ReactNode;
  active: boolean;
};

const MenuButton: FC<MenuButtonProps> = ({ href, children, active }) => {
  return (
    <li>
      <Link
        href={href}
        className={`block p-[28px_20px_30px] text-xl font-bold ${
          active
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
