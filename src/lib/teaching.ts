import { readdir } from "fs/promises";
import type { GrayMatterFile } from "gray-matter";
import { read } from "gray-matter";
import path, { join } from "path";
import { cache } from "react";

import type { SubjectNames } from "@/data/subjects";
import { deepEqual } from "@/utils/array";

import { getImages } from "./markdown";
import { getSubject } from "./subjects";
import urlJoin from "./url";

const UnknownSubjectError = Error("unknown subject");

export type Teaching = {
  slug: string[];
  url: string;
  meta: {
    title?: string;
    fullTitle?: string;
    date?: string;
    tags?: string[];
    author?: string | string[];
    description?: string;
    order: number;
    images: { alt: string; src: string }[];
  };
  content: string;
  next?: TeachingMeta;
  prev?: TeachingMeta;
};

/**
 * parses frontmatter data to the standard teaching metadata
 * @param matter gray matter input
 * @returns a parsed TeachingMetas with default values for empty ones.
 */
function parseFrontmatter(
  matter: GrayMatterFile<string>,
  fp: string,
  fn: string,
  teachingDir: string,
  teachingURL: string
): TeachingMeta {
  const { data } = matter;
  const frontMatter: TeachingMeta = {
    slug: [],
    url: "",
    meta: {
      title: data.title || "--Unbennant--",
      fullTitle: data.title || "--Unbennant--",
      date: data.date || "",
      tags: data.tags || [],
      order: parseInt(data.order, 10) || 9999,
      author: data.author || "",
      description: data.description || "",
      images: data.images || [],
    },
  };
  const subpath = fp
    .substring(teachingDir.length)
    .split("/")
    .filter((x) => x !== "");

  if (subpath.length >= 2) {
    subpath[-1] = frontMatter.meta.title || "";
    frontMatter.meta.fullTitle = subpath.join(path.sep);
  }

  frontMatter.slug = [...subpath, fn.replace(/\.mdx$/, "")];
  frontMatter.url = urlJoin(teachingURL, ...frontMatter.slug);
  return frontMatter;
}

export type TeachingMeta = Pick<Teaching, "slug" | "meta" | "url">;
export type TeachingContent = Pick<
  Teaching,
  "meta" | "slug" | "url" | "content"
>;

export const getTeachingsMetadata = cache(async (subject: SubjectNames) => {
  const subjectConfig = getSubject(subject);
  if (!subjectConfig) {
    throw UnknownSubjectError;
  }

  const files = await readdir(subjectConfig.teachingDir, {
    recursive: true,
    withFileTypes: true,
  });

  const metas = files
    .filter((file) => {
      return !file.isDirectory();
    })
    .map((file) => {
      // console.log("PATH: %s", file);
      const fp = join(file.path, file.name);

      const frontMatter = parseFrontmatter(
        read(fp, {}),
        file.path,
        file.name,
        subjectConfig.teachingDir,
        subjectConfig.teachingURL
      );
      return frontMatter;
    })
    .sort((a, b) => a.meta.order - b.meta.order);
  // console.log(metas);
  return metas;
});

export const getTeachingPrevNext = cache(
  async (
    slug: string[],
    subject: SubjectNames
  ): Promise<{ prev?: TeachingMeta; next?: TeachingMeta }> => {
    const teachings = await getTeachingsMetadata(subject);
    const teaching = teachings.find((t) => deepEqual(t.slug, slug));

    if (!teaching) {
      return {};
    }

    return {
      prev:
        teachings.filter((t) => t.meta.order < teaching.meta.order).at(0) ||
        undefined,
      next:
        teachings.filter((t) => t.meta.order > teaching.meta.order).at(0) ||
        undefined,
    };
  }
);

/**
 * returns the frontmatter metadata and the content of the file
 * @param slug slug strings describes the path to the file with or without .mdx extension
 * @param subject the subject to search the file
 * @returns the meta data and the rest content of the file
 */
export const getTeaching = cache(
  async (slug: string[], subject: SubjectNames): Promise<Teaching> => {
    const subjectConfig = getSubject(subject);
    if (!subjectConfig) {
      throw UnknownSubjectError;
    }

    slug = slug.map((x) => decodeURI(x));

    const { prev, next } = await getTeachingPrevNext(slug, subject);

    const stripedSlugName = path.parse(slug.pop() || "").name;
    const fp = join(
      subjectConfig.teachingDir,
      `${path.join(...slug, stripedSlugName)}.mdx`
    );
    const matter = read(fp);
    const frontMatter = parseFrontmatter(
      matter,
      fp
        .split(path.sep)
        .slice(0, -1)
        .filter((x) => x !== "")
        .join(path.sep),
      path.basename(fp),
      subjectConfig.teachingDir,
      subjectConfig.teachingURL
    );
    frontMatter.meta.images = getImages(matter.content);

    return {
      meta: frontMatter.meta,
      url: frontMatter.url,
      slug: frontMatter.slug,
      content: matter.content,
      prev,
      next,
    };
  }
);

export function getJSONLD(meta: TeachingMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    url: meta.url,
    name: meta.meta.title,
    datePublished: meta.meta.date || "",
    authorName: meta.meta.author || "",
    publisherName: "HTWR Aachen",
    publisherLogo: "https://www.htwr-aachen.de/assets/rwth/htwr.png",
    title: meta.meta.title || "",
    description: meta.meta.description || "",
    images: meta.meta.images.map((x) => x.src) || [],
  };
}
