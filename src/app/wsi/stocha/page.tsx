import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";

import { MaterialienSchnellzugriff } from "../Schnellzugriff";

export const metadata: Metadata = {
	title: "Stocha - Mathe aber schelchter",
	description: "Diskret oder?",
	alternates: {
		canonical: "/wsi/stocha",
	},
};

export default function StudiumPage() {
	return (
		<div className="pt-6">
			<HeadLine>Studium</HeadLine>
			<p className="my-12">
				Einführung in die Stochastik ist so ein Fach, dass ist nicht besonders
				schwer und nicht besonders leicht, deswegen mag man es nicht.
			</p>
			<MaterialienSchnellzugriff />
		</div>
	);
}
