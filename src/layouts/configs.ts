import type { CIGOLMainProps } from "./cigol/Main";
import { SCILNavbarConfig } from "./rwth/instituteConfig";

export const CIGOLConfig: CIGOLMainProps = {
  instituteLinks: [{ name: "SCIL / BUK", url: "/scil" }],
  instituteName: "CIGOL",
  instituteTitle: "Informatische Grundlagen der Mathematik",
};

export const SCILConfig: CIGOLMainProps = {
  instituteName: "SCIL",
  instituteLinks: [
    { name: "ES/SWT", url: "/es" },
    { name: "CIGOL/MALO", url: "/cigol" },
  ],
  instituteTitle:
    "Lehrstuhl für 7 Informatik (Theorie und Logik Systeme diskreter)",
};

export { SCILNavbarConfig };
