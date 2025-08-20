import type { Institutes } from "@/config/institutes";
import type { Subjects } from "@/config/subjects";
import { SubjectConfig } from "@/config/subjects";
import type { Subject } from "@/models/subject";

export function getSubject(name: string): Subject | null {
	if (!(name in SubjectConfig)) {
		return null;
	}
	return SubjectConfig[name as Subjects];
}

/**
 * findAssociatedSubjects finds all subjects that are teached by an institute
 * @param institute - the institute that should teach the found subjects
 * @returns the subjects
 */
export function findAssociatedSubjects(
	institute: Institutes,
	solely = false,
): Subjects[] {
	// mir ist bewusst das diese Methode der reinste Tod ist aber naja.
	// Ich will
	return Object.entries(SubjectConfig)
		.filter(([_key, val]) =>
			(val.institutes as readonly string[])
				.filter((x) => (solely ? x.length <= 1 : true))
				.includes(institute),
		)
		.map(([key, _val]) => key) as Subjects[];
}
