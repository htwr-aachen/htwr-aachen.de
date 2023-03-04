import type { ReactNode } from "react";

export type InstituteLink = {
  name?: string;
  url?: string;
};

export type LayoutProps = {
  meta: ReactNode;
  children: ReactNode;
  instituteLinks?: InstituteLink[];
  navbarConfig?: NavbarConfig;
  instituteName: string;
  instituteTitle?: string;
};

export type NavbarLink = {
  name: string;
  children?: ReactNode;
  url: string;
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
