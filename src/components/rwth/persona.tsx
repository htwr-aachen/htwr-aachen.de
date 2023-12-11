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

type PersonaProps = {
  children: ReactNode;
};
export const Persona: FC<PersonaProps> = ({ children }) => {
  return (
    <ul className="flex min-h-[115px] flex-wrap items-center justify-center bg-rwth-warn px-2">
      {children}
    </ul>
  );
};
