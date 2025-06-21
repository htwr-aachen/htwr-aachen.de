import Link from "next/link";

import { blogArticleConfig } from "@/app/(blog)/blog/config";
import { getArticlesMetadata } from "@/lib/article-metadata";
import { LinkIcon } from "lucide-react";

/**
 * A component to render the latest blog post as a link. Mostly used for the BannerNotify
 */
export async function BlogBannerContent() {
  const latestBlog = (await getArticlesMetadata(blogArticleConfig)).at(0);

  if (!latestBlog) {
    return <span></span>;
  }

  return (
    <Link
      href={latestBlog.url}
      className="line-clamp-1 flex h-16 items-center text-nowrap overflow-ellipsis text-inherit md:justify-end"
    >
      News: {latestBlog?.meta?.fullTitle || latestBlog?.meta.title}
      <LinkIcon className="ml-1 size-4" />
    </Link>
  );
}
