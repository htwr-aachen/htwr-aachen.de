"use client";

import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NewQuestionDrawer } from "./new-question";
import { Questions } from "./questions";
import QASearch from "./search";

export default function Page() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<div className="mx-auto min-h-screen px-4 lg:px-0">
			<div className="mx-auto max-w-[100ch]">
				<h1 className="my-6 scroll-m-20 font-sans text-4xl font-bold lg:text-5xl">
					HTWR-Q&amp;A
				</h1>
				<p className="my-6 leading-7">
					Hast du fragen über dein Informatikstudium? Kann dir Niemand helfen
					und das ZPA ghostet dich bereits <a href="#footnote-1">[1]</a>?
					<br />
					Ich habe/hatte das gleiche Problem also warum nicht einander helfen?
					Hier können ganz einfach, ohne Einlogen oder sonstigem Quatsch, neue
					Fragen gestellt und Antworten eingereicht werden.
				</p>
				<Alert className="my-4">
					<TriangleAlert className="size-4" />
					<AlertTitle>Kein Freifahrtschein</AlertTitle>
					<AlertDescription>
						Das heißt nicht das Fragen und Antworten sofort für Jederman
						sichtbar seien werden. Sie unterlaufen trotzdem eine Inspektion.
					</AlertDescription>
				</Alert>
				<div className="my-4">
					<NewQuestionDrawer />
				</div>
				<QASearch />
			</div>

			<div className="grid sm:grid-cols-2 w-full grid-cols-1 gap-12 mx-auto my-16">
				<div className="w-full max-w-prose justify-self-end">
					<div className="grid grid-cols-[1fr_auto] w-full items-center">
						<h2 id="unanswered" className="text-2xl font-bold w-full block">
							Unbeantwortete Fragen
						</h2>
						<Button asChild variant="outline">
							<Link href="/qa/unanswered" className="text-foreground">
								Nur Anzeigen
							</Link>
						</Button>
					</div>
					<hr className="my-3" />

					<Questions
						answered={false}
						limit={5}
						noScroll={!isDesktop}
						keyPrefix="main-unanswered"
					></Questions>
				</div>
				<div className="w-full max-w-prose justify-self-start">
					<div className="grid grid-cols-[1fr_auto] w-full items-center">
						<h2 id="answered" className="text-2xl font-bold">
							Beantwortete Fragen
						</h2>
						<Button asChild variant="outline">
							<Link href="/qa/answered" className="text-foreground">
								Nur Anzeigen
							</Link>
						</Button>
					</div>
					<hr className="my-3" />
					<Questions
						answered={true}
						limit={5}
						noScroll={!isDesktop}
						keyPrefix="main-answered"
					></Questions>
				</div>
			</div>

			<p id="footnote-1" className="italic mx-auto max-w-prose">
				[1] Okay ja das ZPA antwortet in der Regel ziemlich schnell und
				zuverlässig
			</p>
		</div>
	);
}
