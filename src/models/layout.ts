import type { ReactNode } from "react";

import type { Institutes } from "./institutes";

export type InstituteLink = {
  name?: string;
  url?: string;
};

export type LayoutProps = {
  meta?: ReactNode;
  children?: ReactNode;
  institute: Institutes;
};

export type NavbarLink = {
  name: string;
  children?: ReactNode;
  href: string;
  path?: string;
};

export type LinkElement = NavbarLink & {
  links?: LinkElement[];
};

type NavbarLogo = {
  logoUrl: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
};

export type NavbarConfig = {
  linkElements: LinkElement[];
  main: NavbarLink;
  logo: NavbarLogo;
};
