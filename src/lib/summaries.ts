import type { Subjects } from "@/config/subjects";
import { SubjectConfig } from "@/config/subjects";

import { getArticlesMetadata } from "./article-metadata";
import { getArticle } from "./articles";

/**
 * Thrown when a configuration for an unknown subject is requested
 */
export class UnknownSubjectError extends Error {
	subject: string;

	constructor(name: string) {
		super(`unknown subject ${name}`);
		this.subject = name;
	}
}

/**
 * returns the frontmatter metadata and the content of the file
 * @param slug slug strings describes the path to the file with or without .mdx extension
 * @param subject - the subject to get the corpus configuration from
 * @returns the meta data and the rest content of the file
 * @throws {UnknownSubjectError} - thrown when a unknown subject is specified
 * @throws {InvalidCorpusConfig} - if the path was invalid
 */
export async function getSummary(slug: string[], subject: Subjects) {
	const subjectConfig = SubjectConfig[subject];
	if (!subjectConfig) {
		throw new UnknownSubjectError(subject);
	}

	return getArticle(slug, subjectConfig);
}

/**
 * getArticlesMetadata returns the metadata of all articles in the corpus
 * @param subject - the subjectname to get the corpus configuration from
 *
 * @returns the metadata of all articles/summaries in the
 * @throws {UnknownSubjectError} - thrown when a unknown subject is specified
 * @throws {InvalidCorpusConfig} - if the path was invalid
 */
export async function getSummariesMetadata(subject: Subjects) {
	if (!SubjectConfig[subject]) {
		throw UnknownSubjectError;
	}
	return getArticlesMetadata(SubjectConfig[subject]);
}
