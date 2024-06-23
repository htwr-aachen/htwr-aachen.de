import Link from "next/link";

import { blogArticleConfig } from "@/app/(blog)/blog/config";
import { getArticlesMetadata } from "@/lib/article-metadata";

/**
 * A component to render the latest blog post as a link. Mostly used for the BannerNotify
 */
export async function BlogBannerContent() {
  const latestBlog = (await getArticlesMetadata(blogArticleConfig)).at(0);

  if (!latestBlog) {
    return <span></span>;
  }

  return (
    <Link href={latestBlog.url}>
      {latestBlog?.meta?.fullTitle || latestBlog?.meta.title}
    </Link>
  );
}
