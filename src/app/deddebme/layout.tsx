import "./style.scss";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import Main from "@/layouts/deddebme/Main";

import { institute } from "./config";
import { navbar } from "./navbar";

export const metadata: Metadata = {
  title: {
    template: "%s - DEDDEBME@HTWR",
    default: "DEDDEBME@HTWR",
  },
  description: "DEDDEBME PSP bricht uns alle",
  applicationName: "htwr-aachen",
  manifest: "/assets/scil/favicon/site.webmanifest",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/scil/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/scil/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/scil/favicon/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "/assets/scil/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
    {
      rel: "shortcut icon",
      url: "/assets/scil/favicon/favicon.ico",
    },
  ],
  appleWebApp: {
    title: "htwr-aachen",
  },
};

export default function Layout(props: { children: ReactNode }) {
  return (
    <Main navbar={navbar} institute={institute}>
      {props.children}
    </Main>
  );
}
