import { ChevronLeft, Info, LoaderIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

import { getURLUntil } from "@/app/docs/[...slug]/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { getArticlesMetadata } from "@/lib/article-metadata";
import { getArticle } from "@/lib/articles";
import { mdxOptions } from "@/lib/markdown";

import { blogArticleConfig } from "../config";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const blog = await getArticle(params.slug, blogArticleConfig);
  return (
    <div>
      <Suspense
        fallback={
          <LoaderIcon className="absolute left-0 top-0 m-auto animate-spin"></LoaderIcon>
        }
      >
        <div className="mx-auto flex max-w-prose flex-row items-center py-5">
          <Button asChild className="mr-4">
            <Link href={getURLUntil(params.slug, -1, "/blog")}>
              <ChevronLeft className="mr-2 size-4" />
              Zurück
            </Link>
          </Button>
        </div>
        <div className="prose mx-auto max-w-prose rounded-lg bg-muted px-4 py-7 dark:prose-invert prose-code:rounded prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none">
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
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
