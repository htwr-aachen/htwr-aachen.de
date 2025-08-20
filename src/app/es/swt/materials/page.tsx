import type { Metadata } from "next";
import Link from "next/link";

import { SubjectDocumentList } from "@/components/documents/list";

export const metadata: Metadata = {
	title: "Aufgaben",
	description: "Aufgabensammlung plus unsere (schlechten) Lösungen",
	alternates: {
		canonical: "/es/swt/materials",
	},
};

export default async function Page() {
	return (
		<div>
			<h1 className="text-4xl font-light" id="aufgaben">
				Aufgaben + Eigenlösungen
			</h1>
			<span>
				Wenn jemand bessere Lösugen abgeben will:{" "}
				<a
					target={"_blank"}
					href="mailto:feedback@htwr-aachen.de"
					rel="noreferrer"
				>
					feedback@htwr-aachen.de
				</a>{" "}
				oder Discord:{" "}
				<a
					target={"_blank"}
					href="https://discordapp.com/users/317018058428514314"
					rel="noreferrer"
				>
					Jonsch318#4006
				</a>
			</span>

			<SubjectDocumentList subject="swt" rename={true} />
			<span className="mt-5 block">
				Zusammenfassungen <Link href={"/es/swt/summaries"}>hier.</Link>
			</span>
		</div>
	);
}
