"use client";

import type { FC } from "react";
import { useState } from "react";

export type Roomconfig = {
	name: string;
	minNum: number;
};

type RoomfinderProps = {
	config: Roomconfig[];
	semester?: string;
	text?: string;
};

const Roomfinder: FC<RoomfinderProps> = ({
	config,
	text = "Patentierter Raumfinder",
	semester,
}) => {
	const [error, setError] = useState<string>("");
	const [room, setRoom] = useState<string>("");

	const findRoom = (matrikelNummerString: string) => {
		if (matrikelNummerString.trim() === "") {
			setRoom("");
			setError("");
			return;
		}

		const matrikelNummer = parseInt(matrikelNummerString, 10) || -1;
		if (matrikelNummer < 0) {
			setRoom("");
			setError("Was bist du denn für ein Troll? Negative Matrikelnummer pfff");
			return;
		}

		for (let i = config.length - 1; i >= 0; i--) {
			if (matrikelNummer >= config[i].minNum) {
				if (config[i].name === "error") {
					setError(
						`Typisch Informatikstudent immer alles ausprobieren... Matrikelnummer > ${config[i].minNum} pfff`,
					);
					setRoom("");
				} else {
					setRoom(config[i].name);
					setError("");
				}
				return;
			}
		}
	};

	return (
		<div className="my-4 rounded bg-gray-200 px-3 py-2">
			<h3 className="py-2 text-lg">
				{text} {semester ? `Semester: ${semester}` : ""}
			</h3>
			<input
				className="w-full rounded px-2 py-1"
				type={"number"}
				placeholder="Matrikelnummer (000000)"
				onChange={(ev) => {
					findRoom(ev.target.value);
				}}
			></input>
			<p className="py-2">
				{room !== "" ? `> Du schreibst im Raum ${room}` : ""}
				{error !== "" ? (
					<span className="text-red-600"> &gt; {error}</span>
				) : (
					""
				)}
			</p>
		</div>
	);
};

export { Roomfinder };
