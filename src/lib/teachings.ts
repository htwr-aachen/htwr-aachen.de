import rehypePrism from "@mapbox/rehype-prism";
import type { TransformerInfo } from "@remark-embedder/core";
import remarkEmbedder from "@remark-embedder/core";
import oembedTransformer from "@remark-embedder/transformer-oembed";
import { readdirSync } from "fs";
import { read } from "gray-matter";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMath from "remark-math";

export type Teaching = {
  slug: string;
  url: string;
  meta: {
    title?: string;
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

export type TeachingMeta = Pick<Teaching, "slug" | "meta">;

const teachingsDirectory = join(process.cwd(), "src", "teachings", "syscom");

function metadataFromData(data: { [key: string]: any }): TeachingMeta {
  return {
    slug: "",
    meta: {
      title: data.title || "",
      date: data.date || "",
      tags: data.tags || [],
      order: parseInt(data.order, 10) || 0,
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

export async function getTeachingBySlug(slug: string): Promise<Teaching> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(teachingsDirectory, `${realSlug}.mdx`);
  const { data, content } = read(fullPath);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        remarkGfm,
        remarkHint,
        [remarkEmbedder, { transformers: [oembedTransformer], handleHTML }],
      ],
      rehypePlugins: [rehypeKatex, rehypePrism],
      format: "mdx",
    },
  });

  return {
    url: `/teachings/${realSlug}`,
    slug: realSlug,
    meta: metadataFromData(data).meta,
    content: source,
  };
}

export async function getAllTeachings(): Promise<TeachingMeta[]> {
  const files = readdirSync(teachingsDirectory);
  const teachings = files
    .map((file) => {
      const { data } = read(join(teachingsDirectory, file));
      return {
        slug: file.replace(/\.mdx$/, ""),
        meta: metadataFromData(data).meta,
      };
    })
    .sort((a, b) => a.meta.order - b.meta.order);

  return teachings;
}

export async function getTeachingWithOrder(
  order: number
): Promise<TeachingMeta[]> {
  const teachings = await getAllTeachings();
  const prevTeaching = teachings.filter(
    (teaching) => teaching.meta.order === order
  );
  return prevTeaching;
}

export async function getTeachingWithHigherOrder(
  order: number
): Promise<TeachingMeta | null> {
  const teachings = await getAllTeachings();
  const nextTeaching = teachings.filter(
    (teaching) => teaching.meta.order > order
  );

  if (nextTeaching.length === 0) {
    return null;
  }

  return nextTeaching[0] ?? null;
}

export async function getTeachingWithLowerOrder(
  order: number
): Promise<TeachingMeta | null> {
  const teachings = await getAllTeachings();
  const nextTeaching = teachings.filter(
    (teaching) => teaching.meta.order < order
  );

  if (nextTeaching.length === 0) {
    return null;
  }

  return nextTeaching[nextTeaching.length - 1] ?? null;
}
