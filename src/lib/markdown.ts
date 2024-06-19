import rehypeShiki from "@shikijs/rehype";
import mdxMermaid from "mdx-mermaid";
import type { SerializeOptions } from "next-mdx-remote/dist/types";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMath from "remark-math";

// this is disbled for now
/* export function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info;
  if (
    transformer.name === "@remark-embedder/transformer-oembed" ||
    url.includes("youtube.com")
  ) {
    return `<div className="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`;
  }
  return html;
} */

export const mdxOptions: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      remarkHint,
      [mdxMermaid, { output: "svg" }],
    ],
    rehypePlugins: [
      rehypeKatex,
      // @ts-ignore
      [rehypeShiki, { themes: { light: "github-dark", dark: "vitesse-dark" } }],
    ],
    format: "mdx",
  },
};

export function getImages(content: string): { alt: string; src: string }[] {
  const regex =
    /!\[(?<altText>.*)\]\s*\((?<imageURL>.+)\)|img\s*src="(?<imageURL1>[^"]*)"\s*alt="(?<altText1>[^"]*)" \/>|img\s*alt="(?<altText2>[^"]*)"\s*src="(?<imageURL2>[^"]*)" \/>/gm;

  const images = [];

  for (let m = regex.exec(content); m !== null; m = regex.exec(content)) {
    if (m.index === regex.lastIndex) regex.lastIndex++;

    images.push({
      alt:
        m.groups?.altText ?? m.groups?.altText1 ?? (m.groups?.altText2 || ""),
      src:
        m.groups?.imageURL ??
        m.groups?.imageURL1 ??
        (m.groups?.imageURL2 || ""),
    });
  }

  return images;
}
