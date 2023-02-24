import { useState } from "react";

import type { LayoutProps, NavbarConfig } from "../../models/layout";
import Footer from "./Footer";
import Navbar from "./Navbar";

const defaultConfig: NavbarConfig = {
  linkElements: [
    {
      name: "Studium",
      url: "/studium",
      path: "/studium",
    },
    {
      name: "Forschung",
      url: "/forschung",
      path: "/forschung",
    },
    {
      name: "Wirtschaft",
      url: "/witschaft",
      path: "/witschaft",
    },
  ],
  main: { name: "HTWR", url: "/" },
  logo: { logoUrl: "/assets/scil/scil.svg", alt: "SCIL Logo" },
};

type RWTHProps = {
  pad?: boolean;
};

type MainProps = LayoutProps & RWTHProps;

const Main = (props: MainProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="scil relative bg-[#e5e5e5] font-roboto">
      {props.meta}
      <div
        className={`relative w-full transition-all ${
          menuOpen ? "left-[-275px] h-screen overflow-hidden" : "left-0"
        }`}
      >
        <Navbar
          instituteName={props.instituteName || ""}
          instituteTitle={props.instituteTitle || ""}
          config={props.navbarConfig || defaultConfig}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <div className="max-w-[1280px] lg:mx-auto">
          <div className="m-0 w-full bg-rwth-bg py-12">
            <div className={`mx-auto w-full ${!props.pad && "max-w-[980px]"}`}>
              {props.children}
            </div>
          </div>
        </div>
        <Footer instituteLinks={props.instituteLinks || []} />
      </div>
    </div>
  );
};

export { Main };
