import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Main } from "@/layouts/rwth/Main";

import { institute } from "./config";
import { navbar } from "./navbar";

export const metadata: Metadata = {
	title: {
		template: "%s - SIBD@HTWR",
		default: "SIBD@HTWR",
	},
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
			url: "/assets/sibd/sibd_logo.png",
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

export default function Layout(props: { children: ReactNode }) {
	return (
		<Main institute={institute} navbar={navbar}>
			{props.children}
		</Main>
	);
}
