import type { Metadata } from "next";

import Modern from "@/layouts/modern/layout";

import { BingoNav } from "./nav";

export const metadata: Metadata = {
  title: {
    template: "%s - bingo@HTWR",
    default: "bingo@HTWR",
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Modern nav={BingoNav} name="bingo" prefix="bingo">
      {children}
    </Modern>
  );
};

export default Layout;
