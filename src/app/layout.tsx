import "@/styles/global.css";
import "@/styles/markdown.css";
import "@fontsource-variable/hanken-grotesk";

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import type { FC } from "react";

import { BannerNotifyProvider } from "@/components/banner-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { AppConfig, BaseURL } from "@/config/app";
import { cn } from "@/lib/utils";

type RootLayoutProps = {
  children: React.ReactNode;
};

// main typeface
/* const hkGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hk-grotesk",
  display: "swap",
}); */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const lmserif = localFont({
  src: [
    {
      path: "../../public/lmroman10-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/lmroman10-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lmserif",
});
export const metadata: Metadata = {
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
    <html suppressHydrationWarning lang={AppConfig.locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
          integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
          crossOrigin="anonymous"
        />
        <script
          defer
          data-domain="htwr-aachen.de"
          src="https://plausible.htwr-aachen.de/js/script.js"
        ></script>
      </head>
      <body
        className={cn(
          `font-sans antialiased min-h-screen bg-background ${inter.variable} ${roboto.variable} ${lmserif.variable}`,
        )}
      >
        <BannerNotifyProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="min-h-screen">{children}</div>
          </ThemeProvider>
        </BannerNotifyProvider>
      </body>
    </html>
  );
};

export default RootLayout;
