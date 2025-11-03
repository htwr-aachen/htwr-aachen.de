import { format } from "date-fns";
import Link from "next/link";
import type { ReactNode } from "react";

export default function PanikzettelPage({ children }: { children: ReactNode }) {
	return (
		<div className="md:auto h-full w-screen max-w-[100vw] rounded-t-lg dark:bg-foreground bg-muted text-foreground dark:text-background border-t-2 border-x-2 border-border md:min-h-[1020px] md:w-auto md:min-w-[750px]">
			<div className="header grid justify-center gap-8 pt-20 text-center">
				<Link
					href="/panikzettel"
					className="font-mono font-medium dark:text-[#013220] text-green-400  underline"
				>
					htwr-aachen.de/panikzettel
				</Link>
				<h1 className="font-sans text-3xl font-bold ">Panikzettel Überblick</h1>
				<span className="font-sans text-lg font-normal ">
					Version 1 | {format(new Date(), "dd.MM.yyyy")}
				</span>
				<span className="font-serif text-sm ">Jonas Schneider</span>
				<span className="font-serif text-sm ">
					🟢 neuer als 2 Jahre, 🟡 neuer als 4 Jahre, 🔴 vertrau Bruder
				</span>
			</div>
			<div className="flex w-full flex-col gap-10 px-4 py-12 font-sans md:mx-auto md:grid md:max-w-[calc((2*65ch)+2.5rem)] md:grid-cols-2 md:justify-evenly">
				{children}
			</div>
		</div>
	);
}
