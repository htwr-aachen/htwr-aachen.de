import { getArticlesMetadata } from "@/lib/article-metadata";
import { generateBlogRSS } from "@/lib/blog";

import { blogArticleConfig } from "../config";

export async function GET() {
  const articles = await getArticlesMetadata(blogArticleConfig);
  const rss = await generateBlogRSS(articles);

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
