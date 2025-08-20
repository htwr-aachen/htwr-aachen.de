import type { Metadata } from "next";
import BasicSubjectInfo from "@/components/documents/basic-subject-info";
import SummaryList from "@/components/summaries/list";

export const metadata: Metadata = {
	title: "Zusammenfassungen",
	description: "Eine gute Sammlung von schlechten Zusammenfassungen",
	alternates: {
		canonical: "/es/swt/summaries",
	},
};

export default function Page() {
	return (
		<div>
			<h1 className="font-sans text-4xl font-light" id="aufgaben">
				Vorlesungsfolien / Script
			</h1>

			<p className="my-2">
				Ich finde die Folien von SWT echt unübersichtlich, aber trotzdem hier
				ist der Folienmerge von SWT SS2022/2023:
			</p>

			<BasicSubjectInfo subject="swt"></BasicSubjectInfo>

			<h1 className="mt-4 mb-2 font-sans text-4xl">
				Erklärungen in ihrem eigenen Stil
			</h1>

			<span>
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
					Jonsch318#4006
				</a>
			</span>

			<p className="my-4">
				Wie zur Hölle bekomme ich aus SWT bitte irgendwas &quot;witziges&quot;
				heraus??
				<br />
				Ich probiere hier eher durch alle Diagrammtypen durchzugehen, da dass
				eigentlich das wichtige ist. Ein paar Wissensfragen sind aber auch dabei
				(es gibt meistens eine Allgemeinwissen Frage).
			</p>

			<SummaryList subject="swt" />
		</div>
	);
}
