import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";

import { SIBDSchnellzugriff } from "../schnellzugriff";

export const metadata: Metadata = {
	title: "Spaß Spaß Spaß",
	description: "DBIS studieren ist wie Nathan der Weise lesen zu müssen",
	alternates: {
		canonical: "/sibd/studium",
	},
};

export default function sibdPage() {
	return (
		<div>
			<HeadLine>DBIS :(</HeadLine>

			<SIBDSchnellzugriff />
		</div>
	);
}
