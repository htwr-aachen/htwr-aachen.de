import { FileQuestion, Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ClientPage from "./client-page";
import { PANIKZETTEL_EMAIL, PANIKZETTEL_REPO_URL } from "./config";
import { PanikzettelProvider } from "./context";
import PanikzettelSearch from "./search";

export const metadata: Metadata = {
	title: "Panikzettel",
	description:
		"Die neue ultimative Panikzettelsammlung. Ein erweiterter weiterhin gepflegter Klon der originalen Seite",
};

export default async function Page() {
	return (
		<PanikzettelProvider>
			<div className="w-screen">
				<Alert className="mx-auto mt-12 w-4/6">
					<Info className="size-4" />
					<AlertTitle>Achtung! Fertig! Fork!</AlertTitle>
					<AlertDescription>
						<p>
							Dies ist weiterhin ein Fork des nun ungepflegten Repositories von{" "}
							<a
								className="no-b inline underline"
								href="https://panikzettel.philworld.de"
							>
								philworld.de
							</a>{" "}
							Das neue Repository befindet sich{" "}
							<a className="no-b underline" href={PANIKZETTEL_REPO_URL}>
								hier.
							</a>
							<br /> Bei Fragen, Feedback und Beschwerden bitte an{" "}
							<a
								className="no-b underline"
								href={`mailto:${PANIKZETTEL_EMAIL}`}
							>
								{PANIKZETTEL_EMAIL}
							</a>
						</p>
					</AlertDescription>
				</Alert>
				<PanikzettelSearch />
				<ClientPage />
				<svg
					role="img"
					aria-label="Document with Questionmark"
					className="h-[150px] w-screen fill-muted dark:fill-foreground"
					preserveAspectRatio="none"
					viewBox="0 0 1920 350"
				>
					<path d="M 1920,0 1380.2201,158.73457 1343.4624,30.641294 934.85444,266.96729 883.31522,37.415096 312.94679,322.66254 211.46135,75.046817 0,311.04763 V 0 Z" />
				</svg>
				<div className="max-w-prose px-4 py-24 md:mx-auto">
					<Alert className="mb-7">
						<FileQuestion className="mr-2 size-5" />
						<AlertTitle>Mitmachen?!</AlertTitle>
						<AlertDescription>
							<p>
								Schau mal bei dem{" "}
								<a href="https://github.com/htwr-aacchen/panikzettel">
									Repository
								</a>{" "}
								oder der <Link href="/docs/panikzettel">Dokumenation</Link>{" "}
								vorbei.
							</p>
						</AlertDescription>
					</Alert>
					<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold">
						Updates & Neuigkeiten
					</h2>
					<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
						<li>Panikzettel sind back</li>
						<li>Panikzettel kurzfristig nicht verfügbar. Ab ~Freitag wieder</li>
						<li>Neue UI</li>
					</ul>
				</div>
			</div>
		</PanikzettelProvider>
	);
}
