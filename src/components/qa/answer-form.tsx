"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { subMonths } from "date-fns/subMonths";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { PostAnswer, QAAnswerDTO, QANewAnswerDTO } from "@/lib/qa";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const formSchema = z.object({
	answer: z
		.string()
		.min(2, {
			message: "Antworten sollten schon Inhalt haben!",
		})
		.max(4096, {
			message: "Fragen sollten auch nicht sooo viel Inhalt haben!",
		}),
	monthCount: z.number().nonnegative({
		message: "Na na na sowas machen wir aber nicht. Positiv bleiben!",
	}),
});

export function AnswerDrawer({ questionID }: { questionID: number }) {
	const [open, setOpen] = useState(false);
	return (
		<Drawer
			open={open}
			onOpenChange={(newOpen) => {
				setOpen(newOpen);
			}}
		>
			<Tooltip>
				<DrawerTrigger asChild className="w-full">
					<TooltipTrigger asChild>
						<Button className="my-3 w-full cursor-pointer" variant="outline">
							Ich habe die Antwort!
						</Button>
					</TooltipTrigger>
				</DrawerTrigger>
				<TooltipContent>Du solltest dir schon sicher sein</TooltipContent>
			</Tooltip>
			<DrawerContent>
				<div className="mx-auto mb-8 w-full max-w-lg px-4 lg:px-0">
					<DrawerHeader className="w-full px-0 py-8">
						<DrawerTitle className="text-lg">Ich weiß die Antwort</DrawerTitle>
						<DrawerDescription>
							Bitte sage woher und seit wann du die Antwort kennst
						</DrawerDescription>
					</DrawerHeader>
					<AnswerForm
						questionID={questionID}
						onSuccessfulSubmit={(_new) => {
							setOpen(false);
						}}
					/>
				</div>
			</DrawerContent>
		</Drawer>
	);
}

export function AnswerForm({
	questionID,
	onSuccessfulSubmit,
}: {
	questionID: number;
	onSuccessfulSubmit?: (answer: QAAnswerDTO) => void;
}) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			answer: "",
			monthCount: 0,
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		toast.message("Ich versuche es mal");

		const knownSince = subMonths(new Date(), values.monthCount);
		const answer: QANewAnswerDTO = {
			answer: values.answer,
			known_since: knownSince.toISOString(),
		};

		try {
			const submitted = PostAnswer(questionID.toString(10), answer);
			toast.promise(submitted, {
				loading: "Antwort wird erstellt...",
				success: (a) => {
					return `Antwort ${a.id} wurde erfolgreich erstellt und vorgeschlagen`;
				},
				error: (err) => {
					return `Antwort konnte nicht erstellt werden ${err?.msg || ""}`;
				},
			});
			if (onSuccessfulSubmit) {
				submitted.then((created) => {
					onSuccessfulSubmit(created);
				});
			}
		} catch (err) {
			console.log("Antwort konnte nicht erstellt werden", err);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="answer"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Antwort</FormLabel>
							<FormControl>
								<Textarea id="answer" className="min-h-24" {...field} />
							</FormControl>
							<FormDescription>Hier kommt deine Antwort hin.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="monthCount"
					render={({ field }) => (
						<FormItem>
							<div className="flex flex-row items-center gap-2">
								<FormLabel>Ich kenne die Antwort seit ~</FormLabel>
								<div className="flex items-center gap-2">
									<FormControl>
										<Input
											type="number"
											{...form.register("monthCount", {
												min: 0,
												valueAsNumber: true,
											})}
										/>
									</FormControl>
								</div>
								<FormLabel>{field.value == 1 ? "Monat" : "Monaten"}</FormLabel>
							</div>
							<FormMessage />
							<FormDescription>
								Wir zeigen die erste Anwort nach manueller Sortierung und
								Antwortaktualität.
							</FormDescription>
						</FormItem>
					)}
				/>

				<Button id="submit" type="submit" className="w-full cursor-pointer">
					Antwort abgeben
				</Button>
			</form>
		</Form>
	);
}
