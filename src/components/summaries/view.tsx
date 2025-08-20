import type { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { HTMLAttributes } from "react";
import { Suspense } from "react";
import { getArticle } from "@/lib/articles";
import { mdxOptions } from "@/lib/markdown";
import type { Subject } from "@/models/subject";
import { DefaultSummaryComponents } from "./components";
import SummaryLayout from "./layout";

export default async function SummaryView({
	subjectConfig,
	slug,
	components = {},
	...props
}: {
	subjectConfig: Subject;
	slug: string[];
	components?: React.ComponentProps<typeof MDXProvider>["components"];
} & HTMLAttributes<HTMLDivElement>) {
	const summary = await getArticle(slug, subjectConfig);

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<SummaryLayout
				subjectConfig={subjectConfig}
				meta={summary}
				prev={summary.prev}
				next={summary.next}
				{...props}
			>
				<MDXRemote
					source={summary.content}
					options={mdxOptions}
					components={{ ...DefaultSummaryComponents, ...components }}
				/>
			</SummaryLayout>
		</Suspense>
	);
}
