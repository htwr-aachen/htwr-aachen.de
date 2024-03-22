import { getNavbarConfig } from "@/data/layout";
import { Main as CIGOLMain } from "@/layouts/cigol/Main";
import { Main as ESMain } from "@/layouts/es/Main";
import { Main as HTWRMain } from "@/layouts/rwth/Main";
import { Main as SYSCOMMain } from "@/layouts/syscom/Main";
import type { Institutes } from "@/models/institutes";

import DeddebmeLayout from "./deddebme/Main";

type MainProps = {
  institute: Institutes;
  children?: React.ReactNode;
  meta?: React.ReactNode;
  pad?: boolean;
};

export default function Main(props: MainProps) {
  switch (props.institute) {
    case "SYSCOM":
      return (
        <SYSCOMMain institute={props.institute} meta={props.meta}>
          {props.children}
        </SYSCOMMain>
      );
    case "ES":
      return (
        <ESMain institute={props.institute} meta={props.meta}>
          {props.children}
        </ESMain>
      );
    case "CIGOL":
      return (
        <CIGOLMain institute={props.institute} meta={props.meta}>
          {props.children}
        </CIGOLMain>
      );
    case "DEDDEBME":
      return <DeddebmeLayout>{props.children}</DeddebmeLayout>;
    default:
      return (
        <HTWRMain
          institute={props.institute}
          meta={props.meta}
          pad={props.pad}
          navbarConfig={getNavbarConfig(props.institute)}
        >
          {props.children}
        </HTWRMain>
      );
  }
}
