"use client";

import { TriangleAlert } from "lucide-react";
import QAQuestionEntry from "@/components/qa/question-entry";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useQAQuestions } from "@/hooks/useQAQuestions";
import { NewQuestionDrawer } from "./new-question";
import QASearch from "./search";

export default function Page() {
	const unanswered = useQAQuestions({
		answered: false,
		initialLimit: 5,
		autoLoad: true,
	});
	const answered = useQAQuestions({ answered: true });

	return (
		<div className="mx-auto min-h-screen max-w-prose px-4 lg:px-0">
			<h1 className="my-6 scroll-m-20 font-sans text-4xl font-bold lg:text-5xl">
				HTWR-Q&amp;A
			</h1>
			<p className="my-6 leading-7">
				Hast du fragen über dein Informatikstudium? Kann dir Niemand helfen und
				das ZPA ghostet dich bereits <a href="#footnote-1">[1]</a>?
				<br />
				Ich habe/hatte das gleiche Problem also warum nicht einander helfen?
				Hier können ganz einfach, ohne Einlogen oder sonstigem Quatsch, neue
				Fragen gestellt und Antworten eingereicht werden.
			</p>
			<Alert className="my-4">
				<TriangleAlert className="size-4" />
				<AlertTitle>Kein Freifahrtschein</AlertTitle>
				<AlertDescription>
					Das heißt nicht das Fragen und Antworten sofort für Jederman sichtbar
					seien werden. Sie unterlaufen trotzdem eine Inspektion.
				</AlertDescription>
			</Alert>

			<div className="my-4">
				<NewQuestionDrawer />
			</div>
			<QASearch />

			<div className="my-8">
				<h2 id="unanswered" className="text-2xl font-bold">
					Unbeantwortete Fragen
				</h2>
				{unanswered.error && (
					<Alert className="my-4" variant="destructive">
						<TriangleAlert className="size-4" />
						<AlertTitle>Fehler</AlertTitle>
						<AlertDescription>{unanswered.error.message}</AlertDescription>
					</Alert>
				)}

				{unanswered.questions.length === 0 && !unanswered.loading && (
					<p className="my-4 text-muted-foreground">
						Keine unbeantworteten Fragen gefunden.
					</p>
				)}

				{unanswered.questions.map((question) => (
					<QAQuestionEntry key={question.id} question={question} />
				))}

				{unanswered.loading && (
					<div className="my-4 text-center">
						<p className="text-muted-foreground">Lädt...</p>
					</div>
				)}

				{unanswered.hasMore && !unanswered.loading && (
					<Button
						onClick={unanswered.loadMore}
						className="my-4 w-full"
						variant="outline"
					>
						Mehr laden
					</Button>
				)}
			</div>

			<div className="my-8">
				<h2 id="answered" className="text-2xl font-bold">
					Beantwortete Fragen
				</h2>
				{answered.error && (
					<Alert className="my-4" variant="destructive">
						<TriangleAlert className="size-4" />
						<AlertTitle>Fehler</AlertTitle>
						<AlertDescription>{answered.error.message}</AlertDescription>
					</Alert>
				)}

				{answered.questions.length === 0 && !answered.loading && (
					<p className="my-4 text-muted-foreground">
						Keine beantworteten Fragen gefunden.
					</p>
				)}

				{answered.questions.map((question) => (
					<QAQuestionEntry key={question.id} question={question} />
				))}

				{answered.loading && (
					<div className="my-4 text-center">
						<p className="text-muted-foreground">Lädt...</p>
					</div>
				)}

				{answered.hasMore && !answered.loading && (
					<Button
						onClick={answered.loadMore}
						className="my-4 w-full"
						variant="outline"
					>
						Mehr laden
					</Button>
				)}
			</div>

			<p id="footnote-1" className="italic">
				[1] Okay ja das ZPA antwortet in der Regel ziemlich schnell und
				zuverlässig
			</p>
		</div>
	);
}
