import type { Metadata } from "next";

import RossmanithQuiz from "@/components/summaries/components/quizzes/Rossmanith";
import SummaryView from "@/components/summaries/view";
import { type Subjects, SubjectConfig } from "@/config/subjects";
import { getArticlesMetadata } from "@/lib/article-metadata";
import { getArticle } from "@/lib/articles";

const subject: Subjects = "buk";
const subjectConfig = SubjectConfig[subject];

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  return (
    <div>
      <SummaryView
        subjectConfig={subjectConfig}
        slug={params.slug}
        components={{ RossmanithQuiz }}
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

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { meta, url } = await getArticle(params.slug, subjectConfig);

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
    authors: meta.authors.map((x) => ({ name: x })),
    alternates: {
      canonical: url,
    },
  };
}
