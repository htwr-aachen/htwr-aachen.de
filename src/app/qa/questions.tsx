"use client";

import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";
import QAQuestionEntry from "@/components/qa/question-entry";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import useInfiniteScroll from "@/hooks/use-infinite-scroll";
import { useLoadQuestions } from "@/hooks/use-qa-questions";

export function Questions({
	answered,
	limit,
	noScroll,
	keyPrefix,
}: {
	answered: boolean;
	limit: number;
	noScroll?: boolean;
	keyPrefix: string;
}) {
	const { loading, questions, hasMore, error, loadMore, refresh } =
		useLoadQuestions({
			answered: answered,
			limit: limit,
		});

	const [infiniteRef] = useInfiniteScroll({
		loading,
		hasNextPage: hasMore,
		onLoadMore: loadMore,
		rootMargin: "0px 0px 400px 0px",
		disabled: noScroll,
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: refresh is bad
	useEffect(() => {
		if (noScroll) refresh();
	}, [noScroll]);

	return (
		<ul className="max-w-[100ch] mx-auto">
			{error && (
				<div className="">
					<Alert className="my-4" variant="destructive">
						<TriangleAlert className="size-4" />
						<AlertTitle>Fehler</AlertTitle>
						<AlertDescription>{error.message}</AlertDescription>
					</Alert>
					<Button className="mx-auto w-full" onClick={refresh}>
						Den selben Song nochmal versuchen?
					</Button>
				</div>
			)}

			{questions.length === 0 && !loading && !error && (
				<li className="my-4 text-muted-foreground">
					Keine unbeantworteten Fragen gefunden.
				</li>
			)}
			{questions.map((question) => (
				<li key={keyPrefix + question.id}>
					<QAQuestionEntry question={question} />
				</li>
			))}

			{((noScroll && loading) || (!noScroll && hasMore)) && !error && (
				<div className="my-4 text-center" ref={infiniteRef}>
					<Spinner /> Loading...
				</div>
			)}

			{!loading && hasMore && noScroll && !error && (
				<Button
					className="w-full"
					onClick={() => {
						loadMore();
					}}
				>
					Mehr Laden
				</Button>
			)}
		</ul>
	);
}
