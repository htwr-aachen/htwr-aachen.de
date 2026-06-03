// dringends umbennen

import { differenceInYears, format } from "date-fns";
import { de } from "date-fns/locale";
import Link from "next/link";

import type { Panikzettel } from "@/models/panikzettel";

function UpToDatenessIndicator(date?: Date) {
	if (!date) {
		return "🔴";
	}
	const now = new Date();
	const years = differenceInYears(now, date);

	if (years > 4) {
		return "🔴";
	}

	if (years > 2) {
		return "🟡";
	}

	return "🟢";
}

export default function PanikzettelSelection({
	title,
	selection,
}: {
	selection: Panikzettel[];
	title: string;
}) {
	return (
		<div className="w-full rounded-lg border border-border dark:border-background/50">
			<h3 className="p-4 text-lg font-bold">{title}</h3>
			<hr className="border-border/50 dark:border-background/50" />
			<ul className="my-6 ml-6 list-disc px-4 pb-4 [&>li]:mt-2">
				{selection
					.sort((x, y) => x.name.localeCompare(y.name))
					.map((x) => {
						// Split the date string by "."
						const dateParts = x.date?.split(".") || ["a", "b", "c'"];

						// Rearrange the date parts to "YYYY-MM-DD"
						const formattedDateString = `${dateParts[2]?.trim()}-${dateParts[1]?.trim()}-${dateParts[0]?.trim()}`;

						const date = x.date ? new Date(formattedDateString) : undefined;
						const isValidDate = date && !Number.isNaN(date.getTime());
						return (
							<li key={x.name}>
								<Link href={x.url}>{x.name}</Link>
								<span
									suppressHydrationWarning
									className="ml-2 text-sm text-stone-600"
								>
									{UpToDatenessIndicator(isValidDate ? date : undefined)}{" "}
									{isValidDate
										? format(date, "MMMM yyyy", { locale: de })
										: "nicht bekannt"}
								</span>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
