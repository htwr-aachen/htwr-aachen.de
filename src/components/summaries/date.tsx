"use client";

import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";

const opacityValues = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3];

/**
 * A component to parse and render the date with different opacity if it is older.
 * @param props.date - the date to parse and display
 * @returns the rendered comp
 */
export function SummaryListDate({ date }: { date: string }) {
	const [opacity, setOpacity] = useState(0.65);

	useEffect(() => {
		if (date === "") return;
		const dateParsed = new Date(date);
		const now = new Date();
		const diff = differenceInDays(now, dateParsed);
		// calculate opacity from difference of days
		setOpacity(opacityValues[diff] || 0.3);
	}, [date]);

	return (
		date !== "" && (
			<span className="mr-2 text-sm" style={{ opacity }}>
				Aktualisiert: {date}
			</span>
		)
	);
}
