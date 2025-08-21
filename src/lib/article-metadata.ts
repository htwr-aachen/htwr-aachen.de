import { compareDesc } from "date-fns";
import { readdir, readFile, stat } from "fs/promises";
import type { GrayMatterFile } from "gray-matter";
import matter from "gray-matter";
import path, { join } from "path";

import type { CorpusConfig } from "@/models/corpus";
import { InvalidCorpusConfig } from "@/models/corpus";

import type { ArticleMeta } from "./articles";
import urlJoin from "./url";

function toAuthorsArray(val: string | string[] | undefined): string[] {
	if (typeof val === "string") {
		return val.split(",").map((element) => element.trim());
	}
	if (
		Array.isArray(val) &&
		val.every((element) => typeof element === "string")
	) {
		return val;
	}
	return [];
}

/**
 * parses frontmatter data to the standard teaching metadata
 * @param matterFile gray matter input
 * @param basePath - the path to the file exclusive it's filename
 * @param fileName - the name of the file inclusive it's extension
 * @param corpusConfig - the configuration of the entire corpus.
 * @returns a parsed TeachingMetas with default values for empty ones.
 */
export function parseFrontmatter(
	matterFile: GrayMatterFile<string>,
	basePath: string,
	fileName: string,
	corpusConfig: CorpusConfig,
	mtime: Date,
): ArticleMeta {
	const { data } = matterFile;
	const frontMatter: ArticleMeta = {
		slug: [],
		url: "",
		meta: {
			title: data.title || "--Unbennant--",
			fullTitle: data.fullTitle || data.title || "--Unbennant--",
			date: data.date || mtime.toISOString(),
			tags: data.tags || [],
			order: parseInt(data.order, 10) || -1,
			authors: [
				...toAuthorsArray(data.author),
				...toAuthorsArray(data.authors),
			],
			description: data.description || "",
			images: data.images || [],
		},
	};
	const subpath = basePath
		.substring(corpusConfig.articlesPath.length)
		.split("/")
		.filter((x) => x !== "");

	if (subpath.length >= 2) {
		subpath[-1] = frontMatter.meta.title || "";
		frontMatter.meta.fullTitle = subpath.join(path.sep);
	}

	frontMatter.slug = [...subpath, fileName.replace(/\.mdx?$/, "")];
	frontMatter.url = urlJoin(corpusConfig.articlesURL, ...frontMatter.slug);
	return frontMatter;
}

function orderArticles(articles: ArticleMeta[]): ArticleMeta[] {
	return articles.sort((a, b) => {
		if (a.meta.order >= 0 && a.meta.order >= 0) {
			return a.meta.order - b.meta.order;
		}
		if (a.meta.order >= 0 && b.meta.order < 0) {
			return 1;
		}

		if (a.meta.order < 0 && b.meta.order >= 0) {
			return -1;
		}
		return compareDesc(new Date(a.meta.date), new Date(b.meta.date));
	});
}

/**
 * getArticlesMetadata returns the metadata of all articles in the corpus
 * @param corpusConfig - the configuration (path/url) to find the corpus and configure the metadata
 * @throws {InvalidCorpusConfig} - if path was invalid
 */
export async function getArticlesMetadata(
	corpusConfig: CorpusConfig,
): Promise<ArticleMeta[]> {
	let metas: ArticleMeta[] = [];
	try {
		let files = await readdir(corpusConfig.articlesPath, {
			recursive: true,
			withFileTypes: true,
		});

		files = files.filter((file) => !file.isDirectory());

		metas = await Promise.all(
			files.map(async (file) => {
				const fullFilePath = join(file.parentPath, file.name);
				const content = await readFile(fullFilePath, "utf-8");
				const stats = await stat(fullFilePath);

				return parseFrontmatter(
					matter(content),
					file.parentPath,
					file.name,
					corpusConfig,
					stats.mtime,
				);
			}),
		);
	} catch (error: unknown) {
		if (
			error instanceof Error &&
			(<{ code: unknown }>(<unknown>error)).code === "ENOENT"
		) {
			throw new InvalidCorpusConfig("path error", error);
		} else {
			throw new InvalidCorpusConfig("unexpected error", String(error));
		}
	}

	return orderArticles(metas);
}
