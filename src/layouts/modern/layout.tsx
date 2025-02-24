import type { ReactNode } from "react";

import { Header } from "./nav/header";

const Modern = (props: {
  children: ReactNode;
  name: string;
  prefix: string;
  nav: ReactNode;
}) => {
  return (
    <div className="bg-background min-h-screen">
      <Header name={props.name} prefix={props.prefix} nav={props.nav} />
      <div className="pt-40 md:pt-24">{props.children}</div>
    </div>
  );
};

export default Modern;
