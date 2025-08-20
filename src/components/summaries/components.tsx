import Link from "next/link";
import type { ComponentProps } from "react";
import { HeadLine } from "../rwth/headline";
import Spoiler from "./components/spoiler";

export const DefaultSummaryComponents = {
	Spoiler,

	img: (props: ComponentProps<"img">) => {
		// biome-ignore lint/performance/noImgElement: no dim given
		return <img {...props} loading="lazy" className="centerImg" alt="" />;
	},
	a: (props: ComponentProps<typeof Link>) => {
		return <Link {...props} rel="noopener noreferrer" passHref />;
	},
	h1: (props: ComponentProps<typeof HeadLine>) => (
		<HeadLine>{props.children}</HeadLine>
	),
};
