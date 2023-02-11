import Link from "next/link";
import type { FC, ReactNode } from "react";

type SidenavButtonProps = {
  children: ReactNode;
  href: string;
  isActive: boolean;
};

const SidenavButton: FC<SidenavButtonProps> = ({
  children,
  href,
  isActive,
}) => {
  return (
    <li className="border-y-1 border-dotted border-[#555]">
      <Link
        href={href}
        className={`block px-4 py-2 ${
          isActive ? "bg-rwth-accent text-white" : "text-rwth-accent"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export { SidenavButton };
