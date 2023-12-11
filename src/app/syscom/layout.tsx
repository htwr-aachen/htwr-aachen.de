import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import Main from "@/layouts/Main";

export const metadata: Metadata = {
  title: {
    template: "%s - SYSCOM@HTWR",
    default: "SYSCOM@HTWR",
  },
  applicationName: "htwr-aachen",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/syscom/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/syscom/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/syscom/favicon/favicon-16x16.png",
    },
    {
      rel: "shortcut icon",
      url: "/assets/syscom/favicon/favicon.ico",
    },
  ],
  appleWebApp: {
    title: "htwr-aachen",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function Layout(props: { children: ReactNode }) {
  return <Main institute="syscom">{props.children}</Main>;
}
