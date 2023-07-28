import type { LayoutProps } from "@/models/layout";

import type { CIGOLMainProps } from "./cigol/Main";
import { SCILNavbarConfig } from "./rwth/instituteConfig";
import { Institutes } from "@/models/institutes";

export const CIGOLConfig: CIGOLMainProps = {
  institute: Institutes.CIGOL
};

export const SCILConfig: CIGOLMainProps = {
  institute: Institutes.SCIL
};

export const WSIConfig: LayoutProps = {
  institute: Institutes.WSI
};

export { SCILNavbarConfig };
