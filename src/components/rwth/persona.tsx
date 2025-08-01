import Link from "next/link";
import type { FC, ReactNode } from "react";

type PersonaElementProps = {
  children: ReactNode;
  href: string;
};
export const PersonaElement: FC<PersonaElementProps> = ({ children, href }) => {
  return (
    <li className="h-[115px]">
      <Link
        className="grid h-full items-center justify-center px-2 py-5 text-center text-sm text-black hover:border-b-0 hover:bg-white/75 lg:px-5 lg:text-base"
        href={href}
      >
        <div>{children}</div>
      </Link>
    </li>
  );
};

export function Persona({ children }: { children: ReactNode }) {
  return (
    <ul className="bg-cms-accent-light text-cms-accent-light-text flex min-h-[115px] flex-wrap items-center justify-center px-2">
      {children}
    </ul>
  );
}
