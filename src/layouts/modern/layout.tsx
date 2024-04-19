import type { ReactNode } from "react";

import { Header } from "./nav/header";

const Modern = (props: {
  children: ReactNode;
  name: string;
  prefix: string;
  nav: ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Header name={props.name} prefix={props.prefix} nav={props.nav} />
      <div className="pt-40 md:pt-24">{props.children}</div>
    </div>
  );
};

export default Modern;
