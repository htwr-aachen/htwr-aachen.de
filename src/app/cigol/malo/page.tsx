import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
	description: "Malo - Informatische Grundlagen der Mathematik",
	alternates: {
		canonical: "/cigol/malo",
	},
};

export default function CIGOLPage() {
	return (
		<div className="prose mx-auto px-2 text-black lg:max-w-[100ch] lg:px-0">
			<Content />
		</div>
	);
}
