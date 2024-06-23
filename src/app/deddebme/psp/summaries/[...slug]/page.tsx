import type { Metadata } from "next";

import { DeddebmeSummaryComponents } from "@/app/deddebme/components";
import SummaryView from "@/components/summaries/view";
import { type Subjects, SubjectConfig } from "@/config/subjects";
import { getArticlesMetadata } from "@/lib/article-metadata";
import { getArticle } from "@/lib/articles";

const subject: Subjects = "psp";
const subjectConfig = SubjectConfig[subject];

export default async function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div className="mb-8">
      <SummaryView
        components={DeddebmeSummaryComponents}
        subjectConfig={subjectConfig}
        slug={params.slug}
      ></SummaryView>
    </div>
  );
}

export async function generateStaticParams() {
  const teachings = await getArticlesMetadata(subjectConfig);

  return teachings.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const { meta, url } = await getArticle(params.slug, subjectConfig);

  const authors = Array.isArray(meta.authors) ? meta.authors : [meta.authors];

  return {
    title: meta.fullTitle,
    description: meta.description,
    twitter: {
      title: meta.fullTitle,
      description: meta.description,
      images: meta.images.map((image) => ({
        url: image.src,
      })),
      card: "summary",
    },
    authors: authors.map((x) => ({ name: x })),
    openGraph: {
      type: "article",
      title: meta.fullTitle,
      authors: meta.authors,
      publishedTime: meta.date,
      siteName: "htwr-aachen",
      url,
      images: meta.images.map((image) => ({
        url: image.src,
      })),
    },
    alternates: {
      canonical: url,
    },
  };
}
