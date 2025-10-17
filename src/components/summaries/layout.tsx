import Link from "next/link";
import { ArticleJsonLd } from "next-seo";
import type { HTMLAttributes, ReactNode } from "react";

import type { ArticleMeta } from "@/lib/articles";
import { cn } from "@/lib/utils";
import type { Subject } from "@/models/subject";
import { EditSummary } from "./edit-button";

export default function SummaryLayout(
	props: {
		children: ReactNode;
		meta: ArticleMeta;
		subjectConfig: Subject;
		next?: ArticleMeta;
		prev?: ArticleMeta;
	} & HTMLAttributes<HTMLDivElement>,
) {
	const { children, meta, subjectConfig, next, prev, ...divProps } = props;
	return (
		<>
			<ArticleJsonLd
				headline={meta.meta.title || ""}
				datePublished={meta.meta.date}
				author={meta.meta.authors}
				publisher="HTWR-Aachen"
				description={meta.meta.description}
				image="https://htwr-aachen.de/assets/rwth/htwr.png"
				url={meta.url}
				isAccessibleForFree
				type="Article"
			></ArticleJsonLd>
			<article className="markdown line-numbers mx-auto max-w-[100ch] overflow-hidden text-pretty">
				<div className="mb-6">
					<h1 className="mb-3 w-full text-2xl font-bold">{meta.meta.title}</h1>
					<div className="flex items-center justify-self-end">
						<Link href={subjectConfig.articlesURL}>Zurück</Link>
						<span className="mx-3 inline">|</span>
						<EditSummary />
					</div>
				</div>
				<div
					className={cn("wrapper mb-6 py-3", divProps.className)}
					{...divProps}
				>
					{children}
				</div>
				<div>
					<Link href={subjectConfig.articlesURL}>Zurück</Link>
					<span className="mx-3 inline">|</span>
					<EditSummary />
					{prev && (
						<>
							<span className="mx-3 inline">|</span>
							Vorheriges:{" "}
							<Link href={`${subjectConfig.articlesURL}/${prev?.slug}`}>
								{prev?.meta.title}
							</Link>{" "}
						</>
					)}
					{next && (
						<>
							<span className="mx-3 inline">|</span>
							Nächstes:{" "}
							<Link href={`${subjectConfig.articlesURL}/${next?.slug}`}>
								{next?.meta.title}
							</Link>{" "}
						</>
					)}
				</div>
			</article>
		</>
	);
}
