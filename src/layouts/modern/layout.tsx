import type { ReactNode } from "react";

import { Header } from "./nav/header";
import { useTheme } from "next-themes";

const Modern = (props: {
  children: ReactNode;
  name: string;
  prefix: string;
  nav: ReactNode;
}) => {
  return (
    <div className="bg-background min-h-screen">
      <Header name={props.name} prefix={props.prefix} nav={props.nav} />
      {props.children}
    </div>
  );
};

export default Modern;
