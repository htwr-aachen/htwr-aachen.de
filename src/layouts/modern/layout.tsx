import type { ReactNode } from "react";

import { Nav } from "./nav/nav";

export default function Modern(props: {
  children: ReactNode;
  name: string;
  prefix: string;
}) {
  return (
    <div className="bg-neutral-900">
      <Nav name={props.name} prefix={props.prefix}></Nav>
      {props.children}
    </div>
  );
}
