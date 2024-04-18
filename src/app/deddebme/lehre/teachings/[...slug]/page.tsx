import type { Metadata } from "next";

import SummaryView from "@/components/summaries/view";
import type { Subjects } from "@/config/subjects";
import { getSummariesMetadata, getSummary } from "@/lib/summaries";

const subject: Subjects = "psp";

export default async function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <SummaryView subject={subject} slug={params.slug}></SummaryView>
    </div>
  );
}

export async function generateStaticParams() {
  const teachings = await getSummariesMetadata(subject);

  return teachings.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const { meta, url } = await getSummary(params.slug, subject);

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
