import "../../styles/markdown.css";

import type { Metadata } from "next";

import Modern from "@/layouts/modern/layout";

import { DocsNav } from "./nav";

export const metadata: Metadata = {
	title: {
		template: "%s - docs@HTWR",
		default: "docs@HTWR",
	},
};
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Modern nav={DocsNav} name="docs" prefix="docs">
			{children}
		</Modern>
	);
};

export default Layout;
