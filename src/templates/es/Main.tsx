import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import Navlink from "./Navlink";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="es font-roboto">
      {props.meta}
      <nav
        id="navbar"
        className="navbar grid grid-cols-2 items-center justify-center border-1 border-gray-400 py-4"
      >
        <div className="ml-auto mr-16">
          <Link href={"/es"}>
            <Image
              src={"/es/es.png"}
              width={366}
              height={70}
              alt="ComSys Logo"
              className="h-[70px]"
            />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row">
            <Navlink
              display={{ name: "Essays", href: "/es/eassys" }}
              links={[{ name: "Nichts", href: "/es/404" }]}
            />
            <Navlink
              display={{ name: "Research", href: "/es" }}
              links={[{ name: "Nichts", href: "/es/404" }]}
            />
            <Navlink
              display={{ name: "Publications", href: "/es" }}
              links={[{ name: "Nichts", href: "/es/404" }]}
            />
            <Navlink
              display={{ name: "Teaching", href: "/es" }}
              links={[{ name: "Klausuren", href: "/es/klausuren" }]}
            />
            <Navlink
              display={{ name: "Projects", href: "/es" }}
              links={[{ name: "Nichts", href: "/es/404" }]}
            />
            <Navlink display={{ name: "Jobs", href: "/es/jobs" }} />
            <Navlink
              display={{ name: "About us", href: "/es" }}
              links={[
                { name: "About us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ]}
            />
          </ul>
        </div>
      </nav>
      <div className="container mx-auto max-w-[1000px] py-12">
        {props.children}
      </div>
      <div className="text-red fixed bottom-10 left-10 text-red-500">
        <Link href="/syscom" className="text-red-500">
          &lt; Zur SysCom/Datkom Website
        </Link>
      </div>
    </div>
  );
};

export { Main };
