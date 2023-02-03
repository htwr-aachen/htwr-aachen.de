import Image from "next/image";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

import { MenuButton } from "./MenuButton";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();

  const isActive = (name: string): boolean => {
    return (
      router.pathname.startsWith(`/syscom/${name}`) ||
      router.pathname.startsWith(`/${name}`)
    );
  };

  return (
    <div className="mx-auto px-1 text-gray-700 antialiased md:max-w-[910px]">
      {props.meta}

      <div className="md:max-w-{910px}">
        <div>
          <nav className="h-[210px] grid md:grid-cols-2 grid-cols-[30%_1fr] mt-3 h-{200px} bg-white border-blue-500 border-4 rounded-2xl ml-{-2px} mr-{-2px} p-4">
            <div className="self-center justify-self-center">
              <Image
                src={"/syscom/syscom.png"}
                width={366}
                height={118}
                alt="ComSys Logo"
                className="w-{366px} h-{118px}"
              />
            </div>
            <div className="block">
              <div className="grid justify-end">
                <Image
                  src={"/rwth/htwr.png"}
                  width={150}
                  height={41}
                  alt="RWTH Aachen Logo"
                />
              </div>
              <ul className="grid grid-cols-5">
                <MenuButton
                  src="/syscom/home.png"
                  src_hover="/syscom/home_hover.png"
                  alt="Home Icon"
                  href="/syscom"
                  name="HOME"
                  isActive={router.pathname === "/syscom"}
                />
                <MenuButton
                  src="/syscom/team.png"
                  src_hover="/syscom/team_hover.png"
                  alt="Team Icon"
                  href="/syscom/team"
                  name="TEAM"
                  isActive={isActive("team")}
                />
                <MenuButton
                  src="/syscom/teaching.png"
                  src_hover="/syscom/teaching_hover.png"
                  alt="Teaching Icon"
                  href="/syscom/teaching"
                  name="TEACHING"
                  isActive={isActive("teaching")}
                />
                <MenuButton
                  src="/syscom/research.png"
                  src_hover="/syscom/research_hover.png"
                  alt="Research Icon"
                  href="/syscom/research"
                  name="RESEARCH"
                  isActive={isActive("research")}
                />
                <MenuButton
                  src="/syscom/contact.png"
                  src_hover="/syscom/contact_hover.png"
                  alt="Contact Icon"
                  href="/syscom/contact"
                  name="CONTACT"
                  isActive={isActive("contact")}
                />
              </ul>
            </div>
          </nav>
        </div>

        <div className="content mt-6 rounded-2xl border-4 border-blue-500 bg-white p-6 text-xl">
          {props.children}
        </div>

        <div className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()}{" "}
          <a href="comsys.rwth-aachen.de">ComSys-Lehrstuhl</a>. Dies ist
          (leider) nicht die echte ComSys-Lehrstuhl Webseite.
        </div>
      </div>
    </div>
  );
};

export { Main };
