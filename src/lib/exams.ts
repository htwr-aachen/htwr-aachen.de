import { APIURL } from "@/config/app";
import type { Subjects } from "@/config/subjects";

import urlJoin from "./url";

export type Exam = {
	name: string;
	subject: string;
	filename: string;
	created: string;
};

export async function getExamMeta(subject: Subjects): Promise<Exam[]> {
	try {
		const res = await fetch(urlJoin(APIURL, `/exams?subject=${subject}`), {
			method: "GET",
			redirect: "follow",
			next: {
				revalidate: 3600, // 1h
			},
		});

		if (res.status !== 200) {
			return [];
		}

		return await res.json();
	} catch (_error) {
		return [];
	}
}

export const getProtectedDownloads = async (
	subject: Subjects,
): Promise<string[]> => {
	try {
		const exams = await getExamMeta(subject);
		return exams.map((e) => e.filename);
	} catch (_err) {
		return [];
	}
};
