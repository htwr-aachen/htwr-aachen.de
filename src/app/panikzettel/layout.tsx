import type { ReactNode } from "react";

import Modern from "@/layouts/modern/layout";

import { PanikzettelNav } from "./nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Modern nav={PanikzettelNav} name="panikzettel" prefix="panikzettel">
      {children}
    </Modern>
  );
}
