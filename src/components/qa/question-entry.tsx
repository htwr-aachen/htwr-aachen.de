"use client";

import clsx from "clsx";
import { Link } from "lucide-react";
import { useState } from "react";
import { QAQuestion } from "@/models/qa";
import { Button } from "../ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../ui/collapsible";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { AnswerForm } from "./answer-form";

const BASE_URL = "http://localhost:3000";

export default function QAQuestionEntry({
	question,
	showAnswerDefault = true,
}: {
	question: QAQuestion;
	showAnswerDefault?: boolean;
}) {
	const [isOpen, setIsOpen] = useState<boolean>(showAnswerDefault);
	const COPY_URL = `${BASE_URL}/qa#${question.id}`;

	const onCopyLink = () => {
		navigator.clipboard.writeText(COPY_URL);
	};

	return (
		<div
			className={clsx(
				"text-foreground my-4 rounded-lg border px-4 py-3",
				question.answer ? "border-green-600" : "",
			)}
		>
			<Collapsible open={isOpen} onOpenChange={setIsOpen}>
				<div className="my-4 grid grid-rows-2 lg:grid-cols-[1fr_auto] lg:grid-rows-1">
					<h3 id={question.id.toString()} className="text-lg font-semibold">
						{question.id.toString()}: {question.title}
					</h3>
					<div className="flex flex-row gap-1">
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="outline"
									size="icon"
									onClick={onCopyLink}
									className="cursor-pointer"
								>
									<Link className="size-4" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>Copy {COPY_URL} to the clipboard</TooltipContent>
						</Tooltip>
						{question.answer && (
							<CollapsibleTrigger asChild>
								<Button variant="outline">
									Antwort {isOpen ? "verstecken" : "zeigen"}
								</Button>
							</CollapsibleTrigger>
						)}
					</div>
				</div>
				<hr className="my-3" />
				<div className="prose text-foreground prose-headings:text-foreground prose-headings:text-sm my-2 text-sm">
					<div
						dangerouslySetInnerHTML={{ __html: question.description || "" }}
					/>
				</div>
				{!question.answer ? (
					<Drawer>
						<Tooltip>
							<DrawerTrigger asChild className="w-full">
								<TooltipTrigger asChild>
									<Button
										className="my-3 w-full cursor-pointer"
										variant="outline"
									>
										Ich habe die Antwort!
									</Button>
								</TooltipTrigger>
							</DrawerTrigger>
							<TooltipContent>Du solltest dir schon sicher sein</TooltipContent>
						</Tooltip>
						<DrawerContent>
							<div className="mx-auto mb-8 w-full max-w-lg px-4 lg:px-0">
								<DrawerHeader className="w-full px-0 py-8">
									<DrawerTitle className="text-lg">
										Ich weiß die Antwort
									</DrawerTitle>
									<DrawerDescription>
										Bitte sage woher du die Antwort und seit wann du die Antwort
										kennst (damit wir aktuell bevorzugen können)
									</DrawerDescription>
								</DrawerHeader>
								<AnswerForm questionID={question.id} />
							</div>
						</DrawerContent>
					</Drawer>
				) : (
					<div className="mt-6">
						<CollapsibleContent>
							<hr className="mt-3 mb-6" />
							<div className="prose text-foreground prose-headings:text-foreground prose-headings:text-sm mb-6 text-sm">
								<div
									dangerouslySetInnerHTML={{
										__html: question?.answer?.answer || "",
									}}
								/>
							</div>
						</CollapsibleContent>
					</div>
				)}
			</Collapsible>
		</div>
	);
}
