import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";

import { HeadLine } from "@/components/rwth/headline";
import SummaryList from "@/components/summaries/list";
import { getAllDocsFromDir } from "@/lib/documents";

import { SIBDSchnellzugriff } from "../../schnellzugriff";

export const metadata: Metadata = {
	title: "Zusammenfassungen",
	description: "Schlechter als das Abgabesystem kanns nicht werden...",
	alternates: {
		canonical: "/sibd/studium/teachings",
	},
};

export default async function Page() {
	const folien = await getAllDocsFromDir(
		join(process.cwd(), "content-assets", "dbis", "Folien"),
		"/content-assets/dbis/Folien",
		true,
	);
	return (
		<div>
			<div className="px-3">
				<HeadLine title="Vorlesungsmaterialien" />
				<div className="grid grid-flow-row-dense grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_250px] lg:grid-rows-[auto_auto]">
					<div className="">
						<h1 className="font-sans text-4xl font-light" id="folien-merge">
							Vorlesungsfolien / Script
						</h1>

						<p className="my-2">It&apos;s dbis time.</p>

						<ul className="my-2 ml-8 list-disc">
							<li>
								<a
									target={"_blank"}
									href="/content-assets/dbis/folien-merged.pdf"
									rel="noopener"
								>
									Folienmerge
								</a>
							</li>
							<li>
								<a
									target={"_blank"}
									href="https://panikzettel.philworld.de/dbis.pdf"
									rel="noreferrer"
								>
									Panikzettel
								</a>{" "}
								(ich will{" "}
								<a
									target={"_blank"}
									href="https://panikzettel.philworld.de/"
									rel="noreferrer"
								>
									philworld.de
								</a>{" "}
								nicht die views klauen, aber selbst gehostet gibts{" "}
								<a target={"_blank"} href="/panikzettel" rel="noopener">
									hier.
								</a>
								)
							</li>
						</ul>

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
						<div className="mb-4">
							<h1 className="mt-4 mb-2 font-sans text-4xl">
								Hilfreiche Sachen für die Klausur
							</h1>

							<ul className="my-4 ml-8 list-disc">
								<li>
									<a
										href="https://chat.openai.com/"
										rel="noreferrer"
										target="_blank"
									>
										https://chat.openai.com
									</a>
								</li>
								<li>
									<a
										href="https://normalizer.db.in.tum.de/index.py"
										target="_blank"
										rel="noreferrer"
									>
										https://normalizer.db.in.tum.de/index.py
									</a>
								</li>
								<li>
									<Link target="_blank" href="/sibd/scheduler">
										Automatischer Scheduler Recovery
									</Link>
								</li>
								<li>
									<Link href={"/content-assets/dbis/gremlin.pdf"}>
										Gremlin Folien
									</Link>
								</li>
							</ul>
						</div>

						<h1 className="mt-4 mb-2 font-sans text-4xl">
							Erklärungen in ihrem eigenen Stil
						</h1>

						<p>
							Wenn jemand irgendwas falsches entdeckt (kann schon gut sein)
							meldet euch (oder korrigiert es selber{" "}
							<a
								target={"_blank"}
								href="https://github.com/jonsch318/htwr-aachen.de"
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

						<ul className="list-disc px-4 pt-8 lg:pl-8">
							<SummaryList subject="dbis" />
						</ul>
					</div>
					<SIBDSchnellzugriff />
				</div>
			</div>
		</div>
	);
}
