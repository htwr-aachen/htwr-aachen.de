import { useMemo } from "react";

import { getNavbarConfig } from "@/data/layout";
import { Main as CIGOLMain } from "@/layouts/cigol/Main";
import { Main as ESMain } from "@/layouts/es/Main";
import { Main as HTWRMain } from "@/layouts/rwth/Main";
import { Main as SYSCOMMain } from "@/layouts/syscom/Main";
import { getInstituteByName } from "@/lib/institutes";
import type { StringInstitutes } from "@/models/institutes";
import { Institutes } from "@/models/institutes";

type MainProps = {
  institute: StringInstitutes;
  children: React.ReactNode;
  meta?: React.ReactNode;
  pad?: boolean;
};

export default function Main(props: MainProps) {
  const institute = useMemo(
    () => getInstituteByName(props.institute),
    [props.institute]
  );
  switch (institute) {
    case Institutes.SYSCOM:
      return (
        <SYSCOMMain institute={institute} meta={props.meta}>
          {props.children}
        </SYSCOMMain>
      );
    case Institutes.ES:
      return (
        <ESMain institute={institute} meta={props.meta}>
          {props.children}
        </ESMain>
      );
    case Institutes.CIGOL:
      return (
        <CIGOLMain institute={institute} meta={props.meta}>
          {props.children}
        </CIGOLMain>
      );

    default:
      return (
        <HTWRMain
          institute={institute}
          meta={props.meta}
          pad={props.pad}
          navbarConfig={getNavbarConfig(institute)}
        >
          {props.children}
        </HTWRMain>
      );
  }
}
