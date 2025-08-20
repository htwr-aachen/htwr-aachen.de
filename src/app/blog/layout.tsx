import type { Metadata } from "next";

import Modern from "@/layouts/modern/layout";

import { BlogNav } from "./nav";

export const metadata: Metadata = {
	title: {
		template: "%s - blog@HTWR",
		default: "blog@HTWR",
	},
};
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Modern nav={BlogNav} name="blog" prefix="blog">
			{children}
		</Modern>
	);
};

export default Layout;
