import "@/styles/global.css";
import "@/styles/simple.scss";

import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, Roboto } from "next/font/google";
import type { FC } from "react";

import AppMain from "@/layouts/AppMain";
import { cn } from "@/lib/utils";
import { AppConfig, BaseURL } from "@/utils/AppConfig";
import { ThemeProvider } from "@/components/theme-provider";

type RootLayoutProps = {
  children: React.ReactNode;
};

// main typeface
const hkGrotesk = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hk-grotesk",
});

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
    <html className="light" lang={AppConfig.locale}>
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

        <script
          defer
          data-domain="htwr-aachen.de"
          src="https://plausible.htwr-aachen.de/js/script.js"
        ></script>
      </head>
      <body
        className={cn(
          `font-sans antialiased min-h-screen bg-background ${inter.variable} ${roboto.variable} ${hkGrotesk.variable}`
        )}
      >
        <AppMain>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AppMain>
      </body>
    </html>
  );
};

export default RootLayout;
