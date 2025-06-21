import type { LayoutProps } from "@/models/layout";

import ESNavbar from "./Navbar";

type ESLayoutProps = LayoutProps;

export function Main(props: ESLayoutProps) {
  return (
    <div className="es bg-white text-black">
      <ESNavbar />

      <div className="container mx-auto max-w-[1000px] px-8 py-12 lg:px-0">
        {props.children}
      </div>
    </div>
  );
}
