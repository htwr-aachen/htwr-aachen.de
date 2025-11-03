"use client";

import { Link } from "lucide-react";
import { BaseURL } from "@/config/app";
import type { QAAnswer } from "@/models/qa";
import { Button } from "../ui/button";
import { Item, ItemActions, ItemContent } from "../ui/item";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Deletion } from "./deletion";

export function AnswerEntry({
	questionId,
	answer,
}: {
	questionId: number;
	answer: QAAnswer;
}) {
	const COPY_URL = `${BaseURL}/qa/${questionId}#${answer.id}`;

	const onCopyLink = () => {
		navigator.clipboard.writeText(COPY_URL);
	};
	return (
		<Item variant="outline">
			<ItemContent>
				{/* biome-ignore-start lint/security/noDangerouslySetInnerHtml: content is sanitized on the backend */}
				<div dangerouslySetInnerHTML={{ __html: answer.answer }} />
				{/* biome-ignore-end lint/security/noDangerouslySetInnerHtml: content is sanitized on the backend */}
			</ItemContent>
			<ItemActions>
				<Deletion
					type="answer"
					id={answer.id}
					count={answer.deletion_requests_count}
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
	);
}
