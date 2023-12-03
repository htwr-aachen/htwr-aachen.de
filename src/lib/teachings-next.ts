import type { TransformerInfo } from "@remark-embedder/core";
import remarkEmbedder from "@remark-embedder/core";
import oembedTransformer from "@remark-embedder/transformer-oembed";
import { readdir, stat } from "fs/promises";
import { read } from "gray-matter";
import mdxMermaid from "mdx-mermaid";
import type { SerializeOptions } from "next-mdx-remote/dist/types";
import path, { join } from "path";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMath from "remark-math";

import type { StringInstitutes } from "@/models/institutes";
import { API_URL, ReinvalidateTeachings } from "@/utils/TeachingConfig";

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
    images: string[];
  };
  content: string;
};

export type TeachingMeta = Pick<Teaching, "slug" | "meta">;

export function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info;
  if (
    transformer.name === "@remark-embedder/transformer-oembed" ||
    url.includes("youtube.com")
  ) {
    return `<div className="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`;
  }
  return html;
}

export const mdxOptions: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      remarkHint,
      [mdxMermaid, { output: "svg" }],
      [remarkEmbedder, { transformers: [oembedTransformer], handleHTML }],
    ],
    rehypePlugins: [rehypeKatex, [rehypePrism, { plugins: ["line-numbers"] }]],
    format: "mdx",
  },
};

function parseMetadata(data: { [key: string]: any }): TeachingMeta {
  return {
    slug: "",
    meta: {
      title: data.title || "--Unbennant--",
      date: data.date || "",
      tags: data.tags || [],
      order: parseInt(data.order, 10) || 9999,
      author: data.author || "",
      description: data.description || "",
      images: data.images || [],
    },
  };
}

export async function getTeachings(institutes: StringInstitutes) {
  const res = await fetch(`${API_URL}/api/teachings?subject=${institutes}`, {
    next: {
      revalidate: ReinvalidateTeachings,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch teachings");
  }

  return res.json();
}

export async function getTeachingBySlug(
  dir: string,
  slug: string[]
): Promise<Teaching | null> {
  try {
    const realSlug = slug.join(path.sep).replace(/\.mdx\/$/, "");
    const fullPath = join(dir, `${realSlug}.mdx`);
    const { data, content } = read(fullPath);

    const { meta } = parseMetadata(data);
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
      content,
    };
  } catch (e) {
    return null;
  }
}

export async function getAllTeachings(
  dir: string,
  teachings: TeachingMeta[] = [],
  ogDir: string = ""
): Promise<TeachingMeta[]> {
  // feels little hacky, but it works

  ogDir = ogDir || dir;
  try {
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
        const { meta } = parseMetadata(data);

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
    return teachings.sort((a, b) => a.meta.order - b.meta.order);
  } catch (e) {
    return [];
  }
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
