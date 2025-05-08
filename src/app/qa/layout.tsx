import type { Metadata } from "next";

import Modern from "@/layouts/modern/layout";

import { QANav } from "./nav";

export const metadata: Metadata = {
  title: {
    template: "%s - qa@HTWR",
    default: "qa@HTWR",
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Modern nav={QANav} name="qa" prefix="qa">
      {children}
    </Modern>
  );
};

export default Layout;
