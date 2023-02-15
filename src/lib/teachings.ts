import rehypePrism from "@mapbox/rehype-prism";
import type { TransformerInfo } from "@remark-embedder/core";
import remarkEmbedder from "@remark-embedder/core";
import oembedTransformer from "@remark-embedder/transformer-oembed";
import { readdir, stat } from "fs/promises";
import { read } from "gray-matter";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path, { join } from "path";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMath from "remark-math";

export type Teaching = {
  slug: string;
  url: string;
  meta: {
    title?: string;
    fullTitle?: string;
    date?: string;
    tags?: string[];
    author?: string;
    description?: string;
    order: number;
  };
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

export type TeachingConfiguration = {
  mainSlug?: string;
  includeSubdirs?: boolean;
};

export type TeachingMeta = Pick<Teaching, "slug" | "meta">;

function metadataFromData(data: { [key: string]: any }): TeachingMeta {
  return {
    slug: "",
    meta: {
      title: data.title || "",
      date: data.date || "",
      tags: data.tags || [],
      order: parseInt(data.order, 10) || 9999,
      author: data.author || "",
      description: data.description || "",
    },
  };
}

function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info;
  if (
    transformer.name === "@remark-embedder/transformer-oembed" ||
    url.includes("youtube.com")
  ) {
    return `<div className="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`;
  }
  return html;
}

export async function getTeachingBySlug(
  dir: string,
  slug: string[]
): Promise<Teaching> {
  const realSlug = slug.join(path.sep).replace(/\.mdx\/$/, "");
  const fullPath = join(dir, `${realSlug}.mdx`);
  const { data, content } = read(fullPath);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        remarkGfm,
        remarkHint,
        [remarkEmbedder, { transformers: [oembedTransformer], handleHTML }],
      ],
      rehypePlugins: [
        rehypeKatex,
        [rehypePrism, { plugins: ["line-numbers"] }],
      ],
      format: "mdx",
    },
  });

  const { meta } = metadataFromData(data);
  if (slug.length > 1) {
    const subpath = slug
      .slice(0, slug.length - 1)
      .join("/")
      .replace(/\.mdx\/$/, "");
    meta.fullTitle = `${subpath}/${meta.title}`;
  } else {
    meta.fullTitle = meta.title;
  }

  return {
    url: `/teachings/${realSlug}`,
    slug: realSlug,
    meta,
    content: source,
  };
}

export async function getAllTeachings(
  dir: string,
  teachings: TeachingMeta[] = [],
  ogDir: string = ""
): Promise<TeachingMeta[]> {
  // feels little hacky, but it works

  ogDir = ogDir || dir;

  const files = await readdir(dir);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file) continue;

    const filepath = path.join(dir, file);
    const fileStat = await stat(filepath);

    if (fileStat.isDirectory()) {
      teachings = await getAllTeachings(filepath, teachings, ogDir);
    } else {
      const { data } = read(join(dir, file));
      const { meta } = metadataFromData(data);

      const subpath = dir.substring(ogDir.length + 1).replace("\\", "/");
      if (subpath !== "") {
        meta.fullTitle = `${subpath}/${meta.title}`;
      } else {
        meta.fullTitle = meta.title;
      }

      teachings.push({
        slug: `${filepath
          .substring(ogDir.length + 1)
          .replace("\\", "/")
          .replace(/\.mdx$/, "")}`,
        meta,
      });
    }
  }
  return teachings.sort((a, b) => b.meta.order - a.meta.order);
}

export async function getTeachingWithOrder(
  dir: string,
  order: number
): Promise<TeachingMeta[]> {
  const teachings = await getAllTeachings(dir);
  const prevTeaching = teachings.filter(
    (teaching) => teaching.meta.order === order
  );
  return prevTeaching;
}

export async function getTeachingWithHigherOrder(
  dir: string,
  order: number
): Promise<TeachingMeta | null> {
  const teachings = await getAllTeachings(dir);
  const nextTeaching = teachings.filter(
    (teaching) => teaching.meta.order > order
  );

  if (nextTeaching.length === 0) {
    return null;
  }

  return nextTeaching[0] ?? null;
}

export async function getTeachingWithLowerOrder(
  dir: string,
  order: number
): Promise<TeachingMeta | null> {
  const teachings = await getAllTeachings(dir);
  const nextTeaching = teachings.filter(
    (teaching) => teaching.meta.order < order
  );

  if (nextTeaching.length === 0) {
    return null;
  }

  return nextTeaching[nextTeaching.length - 1] ?? null;
}
