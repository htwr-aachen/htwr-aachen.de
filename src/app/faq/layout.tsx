import type { Metadata } from "next";

import Modern from "@/layouts/modern/layout";

import { BlogNav } from "./nav";

export const metadata: Metadata = {
  title: {
    template: "%s - faq@HTWR",
    default: "faq@HTWR",
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Modern nav={BlogNav} name="faq" prefix="faq">
      {children}
    </Modern>
  );
};

export default Layout;
