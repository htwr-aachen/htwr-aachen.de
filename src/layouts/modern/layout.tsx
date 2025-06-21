import type { ReactNode } from "react";

import { Header } from "./nav/header";

const Modern = (props: {
  children: ReactNode;
  name: string;
  prefix: string;
  nav: ReactNode;
}) => {
  return (
    <div className="bg-background">
      <Header name={props.name} prefix={props.prefix} nav={props.nav} />
      <div className="py-20">{props.children}</div>
    </div>
  );
};

export default Modern;
