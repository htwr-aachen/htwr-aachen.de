import type { Metadata } from "next";
import BasicSubjectInfo, {
	LinkCard,
} from "@/components/documents/basic-subject-info";
import SummaryList from "@/components/summaries/list";

export const metadata: Metadata = {
	title: "Zusammenfassungen",
	description:
		"Es ex. eine Sammlung für alle Malo/(Mathematische Logik) Sachen, aber die hier ist es bestimmt nicht",
	alternates: {
		canonical: "/cigol/malo/summaries",
	},
};

export default function Page() {
	return (
		<div>
			<h1 className="font-sans text-4xl font-light" id="aufgaben">
				Vorlesungsfolien / Script
			</h1>

			<ul className="my-2 ml-8 list-disc">
				<BasicSubjectInfo subject="malo">
					<LinkCard
						title="Script 2023"
						description="Unseres"
						href="/content-assets/malo/script_23.pdf"
					/>
					<LinkCard
						title="Script 2018"
						description="Sollte größtenteils gleich sein"
						href="/content-assets/malo/script_18.pdf"
					/>
					<LinkCard
						title="Video 2023"
						description="Persönlich aufgenommen"
						href="https://video.fsmpi.rwth-aachen.de/23ss-malo"
						target={"_blank"}
						rel="noreferrer"
					/>
					<LinkCard
						title="Video 2017"
						href="https://video.fsmpi.rwth-aachen.de/17ss-malo"
						target={"_blank"}
						rel="noreferrer"
					/>
				</BasicSubjectInfo>
			</ul>

			<h1 className="mt-4 mb-2 font-sans text-4xl">
				Erklärungen in ihrem eigenen Stil
			</h1>

			<span>
				Wenn jemand irgendwas falsches entdeckt (kann schon gut sein) meldet
				euch (oder korrigiert es selber{" "}
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
					jonsch318
				</a>
			</span>

			<p className="my-4">
				Malo ist so kindlich einfach, da muss man auch den richtigen Flair für
				die Titel haben. Ich sammel hier gerne Tips wenn ich die mitbekomme.
			</p>

			<SummaryList subject="malo" />
		</div>
	);
}
