import type { Metadata } from "next";

import Content from "./content.mdx";

export const metadata: Metadata = {
	title: "BuK",
	description: "Bekomploppte und Komplexe",
	alternates: {
		canonical: "/scil/buk",
	},
};

export default function Page() {
	return (
		<div className="prose mx-auto px-2 py-12 text-black lg:max-w-[100ch] lg:px-0">
			<Content />
		</div>
	);
}
