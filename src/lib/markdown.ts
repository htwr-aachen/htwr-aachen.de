// @ts-expect-error i dont know why the type is bugged :/
import rehypeFigure from "@microflash/rehype-figure";
import rehypeShiki from "@shikijs/rehype";
import type { SerializeOptions } from "node_modules/next-mdx-remote/dist/types";
import rehypeDocument from "rehype-document";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { untypedHighlighterConfig } from "./highlighting";
import customRemarkHint from "./remark";

export const mdxOptions: SerializeOptions = {
	mdxOptions: {
		remarkPlugins: [remarkMath, remarkGfm, customRemarkHint],
		rehypePlugins: [
			rehypeSlug,
			rehypeFigure,
			rehypeKatex,
			[
				// @ts-expect-ignore
				rehypeShiki,
				untypedHighlighterConfig,
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

export async function serializeToHTML(
	content: string,
	title: string,
): Promise<string> {
	const file = await unified()
		.use(remarkParse)
		.use(remarkMath)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeFigure)
		.use(rehypeShiki, untypedHighlighterConfig)
		.use(rehypeSlug)
		.use(rehypeDocument, { title })
		.use(rehypeStringify)
		.process(content);
	return String(file);
}
