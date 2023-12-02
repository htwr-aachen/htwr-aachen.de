import "@/styles/global.css";
import "@/styles/markdown.scss";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import type { FC } from "react";

import AppMain from "@/layouts/AppMain";
import { AppConfig } from "@/utils/AppConfig";

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
  description: "The better rwth website",
  authors: [{ name: "Jonas Schneider", url: "jonsch.eu" }],
  creator: "HTWR Team",
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
