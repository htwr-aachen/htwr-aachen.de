import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import BasicSubjectInfo, {
	LinkCard,
} from "@/components/documents/basic-subject-info";
import { HeadLine } from "@/components/rwth/headline";
import SummaryList from "@/components/summaries/list";
import { getAllDocsFromDir } from "@/lib/documents";
import { MaterialienSchnellzugriff } from "../../Schnellzugriff";

async function getData() {
	const folien = getAllDocsFromDir(
		join(process.cwd(), "content-assets", "stocha", "Folien"),
		"/content-assets/stocha/Folien",
		false,
	);

	return {
		folien: await folien,
	};
}

export const metadata: Metadata = {
	title: "zusammenfassungen",
	description: "90% wahrscheinlich das ihr hier Fehler findet...",
	alternates: {
		canonical: "/wsi/stocha/summaries",
	},
};

export default async function TeachingsPage() {
	const { folien } = await getData();

	return (
		<div className="px-3">
			<HeadLine title="Zusammenfassungen" />
			<div className="grid grid-flow-row-dense grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_250px] lg:grid-rows-[auto_auto]">
				<div className="">
					<h1 className="font-sans text-4xl font-light" id="folien-merge">
						Vorlesungsfolien / Script
					</h1>

					<p className="my-2">It&apos;s stocha time.</p>

					<BasicSubjectInfo subject={"stocha"}>
						<LinkCard
							title="Formelsammlung"
							href="/content-assets/stocha/formelsammlung.pdf"
							description="Ihr werdet die später noch brauchen"
						>
							Kauft euch vielleicht sogar besser das Buch
						</LinkCard>
						<LinkCard
							title="Zusammenfassung"
							href="/content-assets/stocha/zusammenfassung.pdf"
							description="Von Freunden gemacht"
						>
							Wenn ihr das könnt, könnt ihrs
						</LinkCard>
					</BasicSubjectInfo>

					<h2 className="font-sans text-4xl font-light" id="folien">
						Alle Folien
					</h2>

					<p className="my-2"></p>
					<ul className="my-2 ml-8 list-disc">
						{folien.map((doc) => {
							return (
								<li key={doc.name}>
									<Link href={doc.url} target={"_blank"}>
										{doc.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="my-8 lg:col-span-2">
					<h1 className="mt-4 mb-2 font-sans text-4xl">
						Erklärungen in ihrem eigenen Stil
					</h1>

					<p>
						Wenn jemand irgendwas falsches entdeckt (kann schon gut sein) meldet
						euch (oder korrigiert es selber{" "}
						<a
							target={"_blank"}
							href="https://github.com/htwr-aachen/htwr-aachen.de"
							rel="noreferrer"
						>
							hier.
						</a>
						):{" "}
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
							Jonsch318
						</a>
					</p>
					<br />

					<p>
						Es kommt hier noch ein bisschen was aber das dauert, also immer mal
						wieder vorbeischauen
					</p>

					<ul className="list-disc px-4 pt-8 lg:pl-8">
						<SummaryList subject="stocha" />
					</ul>
				</div>
				<MaterialienSchnellzugriff />
			</div>
		</div>
	);
}
