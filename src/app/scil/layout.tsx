import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Main } from "@/layouts/rwth/Main";

import { navbar } from "./navbar";

export const metadata: Metadata = {
  title: {
    template: "%s - SCIL@HTWR",
    default: "SCIL@HTWR",
  },
  description: "SCIL Page for all your bukking needs",
  applicationName: "htwr-aachen",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/rwth/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/rwth/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/rwth/favicon/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "/assets/rwth/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "shortcut icon",
      url: "/assets/rwth/favicon/favicon.ico",
    },
  ],
  appleWebApp: {
    title: "htwr-aachen",
  },
};

export default function Layout(props: { children: ReactNode }) {
  return (
    <Main navbar={navbar} institute="scil">
      {props.children}
    </Main>
  );
}
