import { ChevronLeft, Info, LoaderIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleJsonLd } from "next-seo";
import { Suspense } from "react";
import { getURLUntil } from "@/app/docs/[...slug]/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { getArticlesMetadata } from "@/lib/article-metadata";
import { getArticle } from "@/lib/articles";
import { mdxOptions } from "@/lib/markdown";
import { blogArticleConfig } from "../config";

export default async function Page(props: {
	params: Promise<{ slug: string[] }>;
}) {
	const params = await props.params;
	const blog = await getArticle(params.slug, blogArticleConfig);
	return (
		<div>
			<Suspense
				fallback={
					<LoaderIcon className="absolute top-0 left-0 m-auto animate-spin"></LoaderIcon>
				}
			>
				<ArticleJsonLd
					headline={blog.meta.title || ""}
					datePublished={blog.meta.date}
					author={blog.meta.authors}
					publisher="HTWR-Aachen"
					description={blog.meta.description}
					image="https://htwr-aachen.de/assets/rwth/htwr.png"
					url={blog.url}
					isAccessibleForFree
					type="Blog"
				></ArticleJsonLd>
				<article className="mx-auto flex max-w-prose flex-row items-center py-5 line-numbers">
					<Button asChild className="mr-4">
						<Link href={getURLUntil(params.slug, -1, "/blog")}>
							<ChevronLeft className="mr-2 size-4" />
							Zurück
						</Link>
					</Button>
					<Link className="text-inherit" href={"/blog/rss"}>
						RSS
					</Link>
				</article>
				<div className="prose bg-muted dark:prose-invert prose-code:rounded prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none mx-auto max-w-prose rounded-lg px-4 py-7">
					<MDXRemote
						source={blog.content}
						options={mdxOptions}
						components={{ Alert, AlertTitle, AlertDescription, Info }}
					/>
				</div>
			</Suspense>
		</div>
	);
}

export async function generateStaticParams() {
	const teachings = await getArticlesMetadata(blogArticleConfig);

	return teachings.map((t) => ({
		slug: t.slug,
	}));
}

export async function generateMetadata(props: {
	params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
	const params = await props.params;
	const { meta, url } = await getArticle(params.slug, blogArticleConfig);

	return {
		title: meta.fullTitle,
		description: meta.description,
		twitter: {
			title: meta.fullTitle,
			description: meta.description,
			images:
				meta.images?.map((image) => ({
					url: image.src,
				})) || [],
			card: "summary",
		},
		authors: meta.authors?.map((x) => ({ name: x })) || "",
		openGraph: {
			type: "article",
			title: meta.fullTitle || "",
			authors:
				typeof meta.authors === "string" ? [meta.authors] : meta.authors || [],
			publishedTime: meta.date,
			siteName: "htwr-aachen",
			url,
			images:
				meta.images?.map((image) => ({
					url: image.src,
				})) || [],
		},
		alternates: {
			canonical: url,
		},
	};
}
