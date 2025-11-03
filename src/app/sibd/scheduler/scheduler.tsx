"use client";

import { useState } from "react";
import { HeadLine } from "@/components/rwth/headline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { parseSchedule, rcAcaStCheck, visualizeSchedule } from "./scheduling";

export default function SchedulerPage() {
	const [result, setResult] = useState<string>("");
	const [scheduler, setScheduler] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!scheduler || scheduler.length < 1) {
			setResult("");
			setError("Musst schon einen Scheduler eingeben");
			return;
		}

		try {
			const parsedScheduling = parseSchedule(scheduler.trim());
			let res = visualizeSchedule(parsedScheduling);
			res += "\n";

			const [isRc, isAca, isSt] = rcAcaStCheck(parsedScheduling);

			res += `isRc: ${isRc} | isAca: ${isAca} | isSt: ${isSt}`;
			setResult(res);
			setError("");
		} catch (_error) {
			setError("du musst was falsches eingegeben haben :/");
			setResult("");
		}
	};

	return (
		<div>
			<HeadLine>DBIS Scheduler Recovery Aufgaben Lösen</HeadLine>

			<span>
				Natürlich nur für Übungszwecke.{" "}
				{/** biome-ignore lint/performance/noImgElement: gif */}
				<img
					src="https://media.tenor.com/P6GVbSgbRSwAAAAC/winking-wink.gif"
					className="w-12 inline"
					alt="zwinckender Smiley"
				></img>
			</span>

			<div className="middle">
				<p>
					Mal angenommen man hätte rein zufällig so eine Aufgabe: s =
					w2(x)r1(z)w3(y)w2(y)r2(z)c2r3(y)r1(x)r3(z)r3(x)w1(x)c1c3 und man
					müsste angeben ob der Scheduler RC,ACA, ST ist? Dann wäre die Lösung:
				</p>
				<form className="mt-10 flex w-full gap-3" onSubmit={handleSubmit}>
					<Input
						name="scheduler"
						type="text"
						placeholder="w2(x) r1(z) w3(y) w2(y) r2(z) c2 r3(y) r1(x) r3(z) r3(x) w1(x) c1 c3"
						onChange={(e) => {
							setScheduler(e.target.value || "");
						}}
					/>
					<Button
						variant="destructive"
						type="submit"
						className="cursor-pointer"
					>
						Lösen
					</Button>
				</form>

				{result && (
					<>
						<h2 className="mt-8 text-2xl underline">Lösung:</h2>
						<p className="bg-primary text-primary-foreground mt-8 rounded px-4 py-3 font-mono whitespace-pre-wrap">
							{result}
						</p>
					</>
				)}
				{error && <p className="mt-12 text-red-600">{error}</p>}
			</div>
		</div>
	);
}
