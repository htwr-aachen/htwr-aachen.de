import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import type { SerializeOptions } from "next-mdx-remote/dist/types";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMath from "remark-math";

import { highlighter } from "./highlighting";

export const mdxOptions: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkGfm, remarkHint],
    rehypePlugins: [
      rehypeKatex,
      [
        // @ts-expect-ignore
        rehypeShikiFromHighlighter,
        highlighter,
        {
          themes: {
            light: "github-dark",
            dark: "github-light",
          },
        },
      ],
    ],
    format: "mdx",
  },
};

export function getImages(content: string): { alt: string; src: string }[] {
  const regex =
    /!\[(?<altText>.*)\]\s*\((?<imageURL>.+)\)|img\s*src="(?<imageURL1>[^"]*)"\s*alt="(?<altText1>[^"]*)" \/>|img\s*alt="(?<altText2>[^"]*)"\s*src="(?<imageURL2>[^"]*)" \/>/gm;

  const images: { src: string; alt: string }[] = [];

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
