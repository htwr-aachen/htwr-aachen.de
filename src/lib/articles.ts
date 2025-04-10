import { access, readFile, stat } from "fs/promises";
import matter from "gray-matter";
import path, { join } from "path";
import { cache } from "react";

import type { CorpusConfig } from "@/models/corpus";
import { deepEqual } from "@/utils/array";

import { InvalidCorpusConfig } from "../models/corpus";
import { getArticlesMetadata, parseFrontmatter } from "./article-metadata";
import { getImages } from "./markdown";

export type Article = {
  slug: string[];
  url: string;
  meta: {
    title?: string;
    fullTitle?: string;
    date: string;
    tags?: string[];
    authors: string[];
    description?: string;
    order: number;
    images: { alt: string; src: string }[];
  };
  content: string;
  next?: ArticleMeta;
  prev?: ArticleMeta;
};

export type ArticleMeta = Pick<Article, "slug" | "meta" | "url">;
export type ArticleContent = Pick<Article, "meta" | "slug" | "url" | "content">;

/**
 * @param slug - the slug of article to get the surroundings to (e.g. test, [apidocs,roll])
 * @param corpusConfig - the configuration of the corpus. Where do I find the files
 * @returns the previous and next article metadata. undefined if either does exist or the current article could not be found.
 */
export async function getSurroundingArticles(
  slug: string[],
  corpusConfig: CorpusConfig,
): Promise<{ prev: ArticleMeta | undefined; next: ArticleMeta | undefined }> {
  const articles = await getArticlesMetadata(corpusConfig);

  const article = articles.find((x) => deepEqual(x.slug, slug));

  if (!article) {
    return { prev: undefined, next: undefined };
  }

  return {
    prev:
      articles.filter((x) => x.meta.order < article.meta.order).at(0) ||
      undefined,
    next:
      articles.filter((x) => x.meta.order > article.meta.order).at(0) ||
      undefined,
  };
}

/**
 * _getArticle returns a parsed (metadata) article and surrounding articles metadata
 * @param slug - the slug of the article (e.g. test, [apidocs,roll])
 * @param corpusConfig - the configuration of the associated corpus. Where do I find the files
 */
async function _getArticle(
  slug: string[],
  corpusConfig: CorpusConfig,
): Promise<Article> {
  const decodedSlug = slug.map((x) => decodeURIComponent(x));

  const { prev, next } = await getSurroundingArticles(
    decodedSlug,
    corpusConfig,
  );

  const stripedSlug = decodedSlug.join(path.sep).replace(/\.mdx\/$/, "");
  const fp = join(corpusConfig.articlesPath, `${stripedSlug}.mdx`);

  try {
    await access(fp);
    const content = await readFile(fp, "utf-8");
    const stats = await stat(fp);

    const parsedMatter = matter(content);
    const frontMatter = parseFrontmatter(
      parsedMatter,
      fp
        .split(path.sep)
        .slice(0, -1)
        .filter((x) => x !== "")
        .join(path.sep),
      path.basename(fp),
      corpusConfig,
      stats.mtime,
    );
    frontMatter.meta.images = getImages(parsedMatter.content);

    return {
      meta: frontMatter.meta,
      url: frontMatter.url,
      slug: frontMatter.slug,
      content: parsedMatter.content,
      prev,
      next,
    };
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
}

/**
 * getArticle returns a parsed (metadata) article and surrounding articles metadata
 * @param slug - the slug of the article (e.g. test, [apidocs,roll])
 * @param corpusConfig - the configuration of the associated corpus. Where do I find the files
 */
export const getArticle = cache(_getArticle);

/**
 * encodes all relevant metadatas a json ld
 * @param meta - the metadata to be encoded in the JSON LD
 * @returns the json ld
 */
export function getJSONLD(meta: ArticleMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    url: meta.url,
    name: meta.meta.title,
    datePublished: meta.meta.date || "",
    authorName: meta.meta.authors || "",
    publisherName: "HTWR Aachen",
    publisherLogo: "https://www.htwr-aachen.de/assets/rwth/htwr.png",
    title: meta.meta.title || "",
    description: meta.meta.description || "",
    images: meta.meta.images.map((x) => x.src) || [],
  };
}
