import { APIURL } from "@/config/app";
import type { Subjects } from "@/config/subjects";
import type { Panikzettel } from "@/models/panikzettel";

import urlJoin from "./url";

export async function getPanikzettelMetadata(): Promise<Panikzettel[]> {
	try {
		const res = await fetch(urlJoin(APIURL, "/panikzettel"), {
			next: {
				revalidate: 60 * 15,
			},
		});
		if (!res.ok) {
			return [];
		}
		return await res.json();
	} catch (_err) {
		return [];
	}
}

export async function hasPanikzettel(subject: Subjects): Promise<boolean> {
	const meta = await getPanikzettelMetadata();
	if (!meta || !meta.length) {
		return false;
	}

	return meta.find((x) => x.shortname === subject) !== undefined;
}
