import type { ReactNode } from "react";

export type InstituteLink = {
  name?: string;
  url?: string;
};

export type LayoutProps = {
  meta: ReactNode;
  children: ReactNode;
  instituteLinks: InstituteLink[] | null;
};
