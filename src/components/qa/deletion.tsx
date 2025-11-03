import { Trash2 } from "lucide-react";
import { type KeyboardEvent, useRef, useState } from "react";
import { toast } from "sonner";
import { RequestAnswerDeletion, RequestQuestionDeletion } from "@/lib/qa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function Deletion({
	count,
	id,
	type,
}: {
	count: number;
	id: number;
	type: "question" | "answer";
}) {
	const formRef = useRef<HTMLFormElement>(null);
	const [open, setOpen] = useState(false);

	const onSubmit = (ev: KeyboardEvent<HTMLInputElement>) => {
		if (ev.key === "Enter") {
			const reason = formRef.current?.reason.value?.trim();

			if (!reason) {
				toast.error("Bitte gib einen Grund an");
				return;
			}

			if (reason.length > 500) {
				toast.error("Grund ist zu lang (max. 500 Zeichen)");
				return;
			}

			try {
				const encodedReason = encodeURIComponent(reason);
				requestQuestionDeletion(encodedReason);
				formRef.current?.reset();
			} catch (_err) {
				toast.error("Grund enthält ungültige Zeichen");
				return;
			}
		}
	};

	const requestQuestionDeletion = async (reason: string) => {
		let request: Promise<void>;
		switch (type) {
			case "question":
				request = RequestQuestionDeletion(id, reason);
				break;
			case "answer":
				request = RequestAnswerDeletion(id, reason);
				break;
		}
		toast.promise(request, {
			loading: "Löschung beantragen...",
			success: () => {
				return `Löschung erfolgreich beantragt`;
			},
			error: (err) => {
				return `Löschungsantrag konnte nicht erstellt werden ${err?.msg}`;
			},
		});
		request.then(() => {
			count++;
		});
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: do not propagate
		// biome-ignore lint/a11y/useKeyWithClickEvents: do not propagate
		<div onClick={(ev) => ev.stopPropagation()}>
			<Popover open={open} onOpenChange={(x) => setOpen(x)}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						size={count > 0 ? "sm" : "icon-sm"}
						onClick={(ev) => {
							ev.stopPropagation();
						}}
						className="cursor-pointer"
					>
						{count > 0 && `${count}: `}
						<Trash2 />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-80">
					<div className="grid gap-4">
						<div className="space-y-2">
							<h4 className="leading-none font-medium">Löschung beantragen</h4>
							<p className="text-muted-foreground text-sm">
								Wenn du fertig bist drück{" "}
								<kbd className="bg-muted rounded p-1">Enter</kbd>
							</p>
						</div>
						<div className="grid gap-2">
							<form
								ref={formRef}
								className="grid grid-cols-3 items-center gap-4"
							>
								<Label htmlFor="reason">Grund</Label>
								<Input
									id="reason"
									placeholder="is falsch"
									className="col-span-2 h-8"
									type="text"
									onKeyUp={(ev) => onSubmit(ev)}
								/>
							</form>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
