import type { Metadata } from "next";
import Link from "next/link";

import { Main } from "@/layouts/rwth/Main";

export const metadata: Metadata = {
	title: "404 Dirk sucht weiter - HTWR",
	description: "Hier gibt es nichts zu sehen",
};

export default function Page() {
	return (
		<Main institute="htwr">
			<div>
				<h1 className="text-[10rem] font-semibold">404</h1>
				<span>
					Keine Sorge ich seh das du hier warst. Ich füg die bestimmt bald hinzu
				</span>
				<p>
					<Link href={"/"}>Aber nun zurück!</Link>
				</p>
			</div>
		</Main>
	);
}
