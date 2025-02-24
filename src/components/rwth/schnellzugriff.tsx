import Link from "next/link";
import type { FC, ReactNode } from "react";

type SchnellzugrifflinkProps = {
  href: string;
  children: string;
  sub?: boolean;
};

const Schnellzugrifflink: FC<SchnellzugrifflinkProps> = ({
  href,
  children,
  sub = false,
}) => {
  const parsedLink = (
    <Link
      className=" block w-full py-2 pl-6 font-normal text-black hover:border-b-0"
      href={href}
    >
      {children}
    </Link>
  );

  return (
    <li
      className={
        "border-t-1  border-dotted border-[#555] font-normal text-black last:border-b-1 hover:bg-[#e5e1be]"
      }
    >
      {sub ? (
        <ul className="pl-4">
          <li>{parsedLink}</li>
        </ul>
      ) : (
        <>{parsedLink}</>
      )}
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
      <ul className="mx-0 my-3 list-none! pl-4 pr-3">{children}</ul>
    </div>
  );
};

export { Schnellzugriff, Schnellzugrifflink };
