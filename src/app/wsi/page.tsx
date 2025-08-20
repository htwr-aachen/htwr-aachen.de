import type { Metadata } from "next";
import Content from "./content.mdx";
import { MaterialienSchnellzugriff } from "./Schnellzugriff";

export const metadata: Metadata = {
	description: "Stocha - Mathe nur schlechter",
	alternates: {
		canonical: "/wsi",
	},
};

export default function Page() {
	return (
		<div>
			<div className="prose mx-auto px-2 text-black lg:max-w-[100ch] lg:px-0">
				<Content />
			</div>

			<MaterialienSchnellzugriff />
		</div>
	);
}
