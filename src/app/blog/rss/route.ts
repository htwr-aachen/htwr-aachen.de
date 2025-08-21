import { getArticlesMetadata } from "@/lib/article-metadata";
import { generateBlogRSS } from "@/lib/rss";
import { blogArticleConfig } from "../config";

export const dynamic = "force-static";

export async function GET() {
	const articles = await getArticlesMetadata(blogArticleConfig);
	const rss = await generateBlogRSS(articles);

	return new Response(rss, {
		headers: {
			"Content-Type": "application/rss+xml",
		},
	});
}
