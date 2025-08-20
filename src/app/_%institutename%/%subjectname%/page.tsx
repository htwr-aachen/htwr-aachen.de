import type { Metadata } from "next";

import Content from "./content.mdx";

export const metadata: Metadata = {
	title: "CHANGE_ME",
	description: "CHANGE_ME",
	alternates: {
		// canonical: urlJoin(institute, "%subjectname"),
	},
};

export default async function Page() {
	return (
		<Content
			components={
				{
					/* Hier lassen sich lokal extra components einfügen */
				}
			}
		></Content>
	);
}
