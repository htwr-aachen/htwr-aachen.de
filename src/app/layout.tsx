import "@/styles/global.css";
import "@/styles/markdown.css";

import type { Metadata } from "next";
import type { FC } from "react";

import { BannerNotifyProvider } from "@/components/banner-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { AppConfig, BaseURL } from "@/config/app";
import { hkGrotesk, inter, newsreader } from "./fonts";
import "../styles/cms.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "@/components/ui/sonner";
import GeneralLayout from "@/layouts/general";

type RootLayoutProps = {
	children: React.ReactNode;
};

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
		<html
			suppressHydrationWarning
			lang={AppConfig.locale}
			className={`${hkGrotesk.variable} ${inter.variable} ${newsreader.variable} ${hkGrotesk.className}`}
		>
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
					integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
					crossOrigin="anonymous"
				/>
			</head>
			<body className="bg-background min-h-screen font-sans antialiased">
				<TooltipProvider>
					<BannerNotifyProvider>
						<ThemeProvider
							attribute="class"
							enableSystem={true}
							disableTransitionOnChange
						>
							<GeneralLayout>{children}</GeneralLayout>
							<Toaster visibleToasts={3} theme="dark" richColors />
						</ThemeProvider>
					</BannerNotifyProvider>
				</TooltipProvider>
			</body>
		</html>
	);
};

export default RootLayout;
