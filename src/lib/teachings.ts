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
import remarkMath from "remark-math";

export type Teaching = {
  slug: string;
  meta: {
    title?: string;
    date?: string;
    tags?: string[];
    author?: string;
    description?: string;
  };
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

export type TeachingMeta = Pick<Teaching, "slug" | "meta">;

const teachingsDirectory = join(process.cwd(), "teachings");

function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info;
  if (
    transformer.name === "@remark-embedder/transformer-oembed" ||
    url.includes("youtube.com")
  ) {
    return `<div class="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`;
  }
  return html;
}

export async function getTeachingBySlug(slug: string): Promise<Teaching> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(teachingsDirectory, `${realSlug}.mdx`);
  const { data, content } = await read(fullPath);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        [remarkEmbedder, { transformers: [oembedTransformer], handleHTML }],
      ],
      rehypePlugins: [rehypeKatex, rehypePrism],
      format: "mdx",
    },
  });

  return {
    slug: realSlug,
    meta: data,
    content: source,
  };
}

export async function getAllTeachings(): Promise<TeachingMeta[]> {
  const files = readdirSync(teachingsDirectory);
  const teachings = files.map((file) => {
    const { data } = read(join(teachingsDirectory, file));
    return {
      slug: file.replace(/\.mdx$/, ""),
      meta: data,
    };
  });

  return teachings;
}
