import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Main } from "@/layouts/cigol/Main";

import { institute } from "./config";

export const metadata: Metadata = {
  title: {
    template: "%s - CIGOL@HTWR",
    default: "CIGOL@HTWR",
  },
  applicationName: "htwr-aachen",
  manifest: "/assets/cigol/favicon/site.webmanifest",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/cigol/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/cigol/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/cigol/favicon/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "/assets/cigol/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "shortcut icon",
      url: "/assets/cigol/favicon/favicon.ico",
    },
  ],
  appleWebApp: {
    title: "htwr-aachen",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5eedd",
};

export default function CIGOLLayout({ children }: { children: ReactNode }) {
  return <Main institute={institute}>{children}</Main>;
}
