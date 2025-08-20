import type { Metadata } from "next";

import { MaterialienSchnellzugriff } from "../Schnellzugriff";
import Content from "./content.mdx";

export const metadata: Metadata = {
	title: "Keine Ahnung",
	description: "Kreativ sein ist schon anstregend",
	alternates: {
		canonical: "/cesti/itsec",
	},
};

export default async function Page() {
	return <Content components={{ MaterialienSchnellzugriff }}></Content>;
}
