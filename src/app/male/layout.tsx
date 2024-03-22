import type { Metadata, Viewport } from "next";
import type { FC } from "react";

import Main from "@/layouts/Main";

type WSILayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "%s - MaLe@HTWR",
    default: "MaLe@HTWR",
  },
  applicationName: "htwr-aachen",
  manifest: "/assets/rwth/favicon/site.webmanifest",
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
      url: "/assets/male/logo.png",
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const WSILayout: FC<WSILayoutProps> = ({ children }) => {
  return <Main institute="MALE">{children}</Main>;
};

export default WSILayout;
