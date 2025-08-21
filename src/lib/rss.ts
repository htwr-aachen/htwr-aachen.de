import { Feed, type FeedOptions } from "feed";
import { blogArticleConfig } from "@/app/blog/config";
import { AppContactEmail, BaseURL } from "@/config/app";
import type { CorpusConfig } from "@/models/corpus";
import { type ArticleMeta, getArticle } from "./articles";
import urlJoin from "./url";

export async function generateBlogRSS(
	articles: ArticleMeta[],
): Promise<string> {
	const options: FeedOptions = {
		title: "HTWR Blog",
		description: "Neuerungen rund um HTWR",
		id: urlJoin(BaseURL, "/blog"),
		link: urlJoin(BaseURL, "/blog"),
		image: urlJoin(BaseURL, "/assets/rwth/htwr-banner.png"),
		favicon: urlJoin(BaseURL, "/android-chrome-192x192.png"),
		author: {
			name: "HTWR-Team/jonsch",
			email: AppContactEmail,
			link: urlJoin(BaseURL, "/contact"),
		},
		copyright: "htwr-aachen.de",
		language: "de",
	};

	return generateRSS(options, articles, blogArticleConfig);
}

export async function generateRSS(
	feedOptions: FeedOptions,
	articles: ArticleMeta[],
	articleConfig: CorpusConfig,
) {
	const feed = new Feed(feedOptions);

	for (const article of articles) {
		// we want to add things in order so we must use synchronous awaiting here
		const { content } = await getArticle(article.slug, articleConfig);
		feed.addItem({
			title: article.meta.fullTitle || article.meta.title || "Empty",
			id: article.url,
			link: article.url,
			description: article.meta.description,
			date: new Date(article.meta.date),
			category: article.meta.tags?.map((x) => {
				return { name: x, term: x };
			}),
			content,
			contributor: article.meta.authors.map((x) => {
				return { name: x, link: "", email: AppContactEmail };
			}),
		});
	}

	return feed.rss2();
}
