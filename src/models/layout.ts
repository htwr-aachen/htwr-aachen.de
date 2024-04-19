import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

import type { Institutes } from "@/config/institutes";

export type InstituteLink = {
  name?: string;
  url?: string;
};

export type LayoutProps = {
  children?: ReactNode;
  institute: Institutes;
};

export type NavbarLink = {
  name: string;
  path?: string;
  children?: ReactNode;
} & LinkProps;

export type LinkElement = NavbarLink & {
  links?: LinkElement[];
};

export type NavbarLogo = {
  href: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
} & Omit<ImageProps, "ref" | "width" | "height">;

export type NavbarConfig = {
  linkElements: LinkElement[];
  main: NavbarLink;
  logo: NavbarLogo;
};

export function toValue(
  input: number | `${number}` | undefined,
  defaultValue = 0
) {
  switch (typeof input) {
    case "number":
      return input;
    case "string":
      return parseInt(input, 10);
    default:
      return defaultValue;
  }
}
