/// here we generate a rss feed for the /blog

import { Feed } from "feed";

import { blogArticleConfig } from "@/app/(blog)/blog/config";

import { type ArticleMeta, getArticle } from "./articles";

export async function generateBlogRSS(
  articles: ArticleMeta[]
): Promise<string> {
  const feed = new Feed({
    title: "HTWR Blog",
    description: "Neuerungen rund um HTWR",
    id: "https://htwr-aachen.de/blog",
    link: "https://htwr-aachen.de/blog",
    image: "https://htwr-aachen.de/assets/rwth/htwr-banner.png",
    favicon: "https://htwr-aachen.de/android-chrome-192x192.png",
    author: {
      name: "HTWR-Team/jonsch",
      email: "contact@htwr-aachen.de",
      link: "https://htwr-aachen.de/contact",
    },
    copyright: "htwr-aachen.de",
    language: "de",
  });

  for (const article of articles) {
    // we want to add things in order so we must use synchronous awaiting here
    const { content } = await getArticle(article.slug, blogArticleConfig);
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
        return { name: x, link: "", email: "contact@htwr-aachen.de" };
      }),
    });
  }

  return feed.rss2();
}
