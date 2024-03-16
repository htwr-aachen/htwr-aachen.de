import { ReactNode } from "react";
import { Nav } from "./nav";

export default function Modern(props: {
  children: ReactNode;
  name: string;
  prefix: string;
}) {
  return (
    <div>
      <Nav></Nav>
      {props.children}
    </div>
  );
}
