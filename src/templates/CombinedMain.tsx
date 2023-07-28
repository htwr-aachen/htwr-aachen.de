import type { FC, ReactNode } from "react";

import {
  DefaultNavbar,
  SCILNavbarConfig,
} from "@/layouts/rwth/instituteConfig";
import { Main as HTWRMain } from "@/layouts/rwth/Main";
import { SubStyling } from "@/lib/style";
import { Main as ESMain } from "@/layouts/es/Main";
import { Main as SyscomMain } from "@/templates/syscom/Main";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  styling?: SubStyling;
};

const CombinedMain: FC<IMainProps> = ({ children, meta, styling }) => {
  switch (styling) {
    case SubStyling.None:
      return (
        <HTWRMain
          meta={meta}
          instituteName="HTWR"
          instituteTitle="HTWR macht auch mal Fehler"
          navbarConfig={DefaultNavbar}
        >
          {children}
        </HTWRMain>
      );
    case SubStyling.ES:
      return <ESMain meta={meta}>{children}</ESMain>;
    case SubStyling.SYSCOM:
      return <SyscomMain meta={meta}>{children}</SyscomMain>;
    case SubStyling.SCIL:
      return (
        <HTWRMain
          meta={meta}
          instituteName="SCIL"
          instituteTitle="Lehrstuhl für 7 Informatik (Theorie und Logik Systeme diskreter)"
          navbarConfig={SCILNavbarConfig}
        >
          {children}
        </HTWRMain>
      );
    default:
      return (
        <div>
          {meta}
          {children}
        </div>
      );
  }
};

export default CombinedMain;
