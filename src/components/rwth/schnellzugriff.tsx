import Link from "next/link";
import type { FC, ReactNode } from "react";

type SchnellzugrifflinkProps = {
  href: string;
  children: string;
};

const Schnellzugrifflink: FC<SchnellzugrifflinkProps> = ({
  href,
  children,
}) => {
  return (
    <li
      className="border-t-1  border-dotted
     border-[#555] font-normal text-black last:border-b-1 hover:bg-[#e5e1be]"
    >
      <Link
        className=" block w-full py-2 pl-6 font-normal text-black"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

type SchnellzugriffProps = {
  children: ReactNode;
  title: string;
};

const Schnellzugriff: FC<SchnellzugriffProps> = ({ children, title }) => {
  return (
    <div className="min-h-[410px] bg-rwth-warn2">
      <h2 className="bg-rwth-warn py-4 text-center text-xl font-semibold">
        {title}
      </h2>
      <ul className="my-3 pl-4 pr-3">{children}</ul>
    </div>
  );
};

export { Schnellzugriff, Schnellzugrifflink };
