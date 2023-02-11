import type { FC, ReactNode } from "react";

import { SubStyling } from "@/lib/style";
import { Main as ESMain } from "@/templates/es/Main";
import { Main as SCILMain } from "@/templates/scil/Main";
import { Main as SyscomMain } from "@/templates/syscom/Main";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  styling?: SubStyling;
};

const CombinedMain: FC<IMainProps> = ({ children, meta, styling }) => {
  switch (styling) {
    case SubStyling.ES:
      return <ESMain meta={meta}>{children}</ESMain>;
    case SubStyling.SYSCOM:
      return <SyscomMain meta={meta}>{children}</SyscomMain>;
    case SubStyling.SCIL:
      return <SCILMain meta={meta}>{children}</SCILMain>;
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
