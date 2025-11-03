"use client";

import { DialogDescription } from "@radix-ui/react-dialog";
import {
	Link,
	MessageCircleQuestionMark,
	MessageCircleReply,
} from "lucide-react";
import { BaseURL } from "@/config/app";
import { cn } from "@/lib/utils";
import type { QAQuestion } from "@/models/qa";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "../ui/item";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { AnswerEntry } from "./answer-entry";
import { NewAnswerButton } from "./answer-form";
import { Deletion } from "./deletion";

export default function QAQuestionEntry({
	question,
}: {
	question: QAQuestion;
}) {
	const COPY_URL = `${BaseURL}/qa/${question.id}`;

	const onCopyLink = () => {
		navigator.clipboard.writeText(COPY_URL);
	};

	return (
		<Dialog>
			<DialogTrigger className="cursor-pointer" asChild>
				<Item
					variant="muted"
					className={cn(
						"text-foreground my-4 rounded-lg border px-4 py-3 bg-accent grid grid-cols-[1fr_auto]",
						question.answers ? "border-green-600" : "",
					)}
				>
					<ItemContent className="max-w-prose">
						<ItemTitle id={question.id.toString()}>
							{question.id.toString()}: {question.title}
						</ItemTitle>
						<ItemDescription className="line-clamp-1 truncate max-w-full">
							{question.description}
						</ItemDescription>
					</ItemContent>
					<ItemActions>
						<Deletion
							type="question"
							id={question.id}
							count={question.deletion_requests_count}
						/>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									size="icon-sm"
									onClick={(ev) => {
										ev.stopPropagation();
										onCopyLink();
									}}
									className="cursor-pointer"
								>
									<Link />
								</Button>
							</TooltipTrigger>
							<TooltipContent>Kopiere {COPY_URL} ins Clipboard</TooltipContent>
						</Tooltip>
					</ItemActions>
				</Item>
			</DialogTrigger>
			<DialogContent className="sm:max-w-max">
				<DialogHeader>
					<DialogTitle>
						{question.id.toString()}: {question.title}
					</DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				{/* biome-ignore-start lint/security/noDangerouslySetInnerHtml: content is sanitized on the backend */}
				<div className="text-muted-foreground prose max-w-[100ch]">
					<div>
						<MessageCircleQuestionMark className="size-4 mb-1" />
						<div
							dangerouslySetInnerHTML={{ __html: question.description || "" }}
						/>
					</div>
					{/* biome-ignore-end lint/security/noDangerouslySetInnerHtml: content is sanitized on the backend */}
					{question.answers && (
						<>
							<hr className="my-6 not-prose" />
							<MessageCircleReply className="size-4 mb-1" />
							{question.answers.map((answer) => {
								return (
									<AnswerEntry
										questionId={question.id}
										answer={answer}
										key={`answer-${answer.id}`}
									></AnswerEntry>
								);
							})}
						</>
					)}
				</div>
				<DialogFooter className="sm:w-full pt-3">
					<Button>Weitere Laden</Button>
					<NewAnswerButton questionId={question.id}></NewAnswerButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
