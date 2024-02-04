import "@/styles/global.css";
import "@/styles/markdown.scss";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import type { FC } from "react";

import AppMain from "@/layouts/AppMain";
import { AppConfig, BaseURL } from "@/utils/AppConfig";

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    template: "%s - HTWR",
    default: AppConfig.title,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png?v=2",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png?v=2",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png?v=2",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg?v=2",
      color: "#5bbad5",
    },
    {
      rel: "shortcut icon",
      url: "/favicon.ico?v=2",
    },
  ],
  manifest: "/site.webmanifest?v=2",
  description: "The better rwth website",
  authors: [{ name: "Jonas Schneider", url: "jonsch.eu" }],
  creator: "HTWR Team",
  twitter: {
    site: "@htwr-aachen",
    creator: "@jonsch318",
    description: "RWTH? => HTWR!",
    title: AppConfig.title,
  },
  applicationName: "htwr-aachen.de",
  appleWebApp: {
    title: "HTWR-Aachen",
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL(BaseURL),
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang={AppConfig.locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/themes/prism-twilight.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/plugins/line-numbers/prism-line-numbers.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
          integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SpeedInsights></SpeedInsights>
        <div className={`${inter.className} ${roboto.className}`}>
          <div className="bg"></div>
          <AppMain>{children}</AppMain>
          <Analytics />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
