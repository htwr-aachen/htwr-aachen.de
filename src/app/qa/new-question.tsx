"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { PostQuestion, type QANewQuestionDTO } from "@/lib/qa";
import type { QAQuestion } from "@/models/qa";

const formSchema = z.object({
	question: z
		.string()
		.min(5, {
			message: "Fragen sollten schon Inhalt haben!",
		})
		.max(150, {
			message: "Fragen sollten auch nicht sooo viel Inhalt haben!",
		}),
	description: z
		.string()
		.max(5000, { message: "Das kannst du nicht ernst meinen!" }),
});

const DescriptionPlaceholder =
	"1. Das Abgabedatum der Abschlussarbeit\n2. Das Kolloquium/die Verteidigung\n3. Die Datum der Noteneintragung";

export function NewQuestionDrawer() {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button className="w-full cursor-pointer">Neue Frage stellen</Button>
				</DialogTrigger>
				<DialogContent className="xl:max-w-1/2 sm:max-w-3/4">
					<DialogHeader>
						<DialogTitle className="text-lg">Neue Frage stellen</DialogTitle>
						<DialogDescription>
							Bitte stelle sicher, das sich diese, oder eine ähnliche Frage noch
							nicht im Sortiment befindet.
						</DialogDescription>
					</DialogHeader>
					<NewQuestionForm onSuccessfulSubmit={(_) => setOpen(false)} />
				</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer
			open={open}
			onOpenChange={(newOpen) => setOpen(newOpen)}
			repositionInputs={false}
		>
			<DrawerTrigger asChild>
				<Button className="w-full cursor-pointer">Neue Frage stellen</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto mb-8 w-full max-w-lg px-4 lg:px-0">
					<DrawerHeader className="w-full px-0 py-8">
						<DrawerTitle className="text-lg">Neue Frage stellen</DrawerTitle>
						<DrawerDescription>
							Bitte stelle sicher, das sich diese, oder eine ähnliche Frage noch
							nicht im Sortiment befindet.
						</DrawerDescription>
					</DrawerHeader>
					<NewQuestionForm onSuccessfulSubmit={(_) => setOpen(false)} />
				</div>
			</DrawerContent>
		</Drawer>
	);
}

function NewQuestionForm({
	onSuccessfulSubmit,
}: {
	onSuccessfulSubmit?: (created: QAQuestion) => void;
}) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			question: "",
			description: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const question: QANewQuestionDTO = {
			title: values.question,
			description: values.description,
		};

		try {
			const submitted = PostQuestion(question);
			toast.promise(submitted, {
				loading: "Frage wird erstellt...",
				success: (q) => {
					return `Frage ${q.id} wurde erfolgreich erstellt und vorgeschlagen`;
				},
				error: (err) => {
					return `Frage konnte nicht erstellt werden ${err?.msg || ""}`;
				},
			});
			if (onSuccessfulSubmit) {
				submitted.then((created) => {
					onSuccessfulSubmit(created);
				});
			}
		} catch (err) {
			console.log("Frage konnte nicht erstellt werden", err);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="question"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Frage</FormLabel>
							<FormControl>
								<Input
									id="question"
									className="text-xs"
									placeholder="Welches Datum gilt als Bachelorarbeitsdatum?"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Dies ist dein Titel deiner Frage.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Beschreibung {"&"} Kontext</FormLabel>
							<FormControl>
								<Textarea
									id="description"
									className="min-h-24"
									placeholder={DescriptionPlaceholder}
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Hier eine weiterführenden Beschreibung deiner Frage. Wenn hier
								irgendwas Identifizierendes drin vorkommt ist die Frage weg vom
								Fenster! 👿
								<br />
								(Markdown ist (bald) unterstützt - Ja ich kenne{" "}
								<Tooltip>
									<TooltipTrigger>SQL-</TooltipTrigger>
									<TooltipContent>
										SQL injections sollten nicht vorkommen. Ich verwende kein
										string templating. See{" "}
										<a
											href="https://github.com/htwr-aachen/backend"
											referrerPolicy="no-referrer"
										>
											github.com/htwr-aachen/backend
										</a>
									</TooltipContent>
								</Tooltip>{" "}
								&amp;{" "}
								<Tooltip>
									<TooltipTrigger>XSS-Injections</TooltipTrigger>
									<TooltipContent>
										Sanitization durch{" "}
										<a
											href="https://github.com/microcosm-cc/bluemonday"
											referrerPolicy="no-referrer"
										>
											github.com/microcosm-cc/bluemonday
										</a>
									</TooltipContent>
								</Tooltip>{" "}
								&amp;{" "}
								<Tooltip>
									<TooltipTrigger>XSRF*</TooltipTrigger>
									<TooltipContent>
										XSRF ist hier wohl nicht anwendbar, da du nicht
										Authentifiziert bist 🤓. Falls doch show me!
									</TooltipContent>
								</Tooltip>
								)
								<br />
								PS. backend open-source auf{" "}
								<a
									href="https://github.com/htwr-aachen/backend"
									referrerPolicy="no-referrer"
								>
									github.com/htwr-aachen/backend
								</a>
								.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button id="submit" type="submit" className="w-full cursor-pointer">
					Stellen
				</Button>
			</form>
		</Form>
	);
}
