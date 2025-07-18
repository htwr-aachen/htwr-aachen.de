import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Main } from "@/layouts/es/Main";
import { navbar } from "./navbar";

export const metadata: Metadata = {
  title: {
    template: "%s - ES@HTWR",
    default: "ES@HTWR",
  },
  applicationName: "htwr-aachen",
  manifest: "/assets/es/favicon/site.webmanifest",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/es/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/es/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/es/favicon/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "/assets/es/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "shortcut icon",
      url: "/assets/es/favicon/favicon.ico",
    },
  ],
  appleWebApp: {
    title: "htwr-aachen",
  },
};

export default function Layout(props: { children: ReactNode }) {
  return (
    <Main institute="es" navbar={navbar}>
      {props.children}
    </Main>
  );
}
