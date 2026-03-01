import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

import { Main } from "@/layouts/rwth/Main";
import Content from "./content.mdx";

export const metadata: Metadata = {
	title: "Kontakt",
	description: "Überleg nochmal ob du wirklich stress willst",
};

const Contact: FC = () => {
	return (
		<Main institute="htwr">
			<div className="prose mx-auto px-2 text-black lg:max-w-[100ch] lg:px-0">
				<Content />
			</div>
		</Main>
	);
};

export default Contact;
