import type { Metadata } from "next";

import RumpeQuiz from "@/components/summaries/components/quizzes/Rumpe";
import SummaryView from "@/components/summaries/view";
import { SubjectConfig, type Subjects } from "@/config/subjects";
import { getArticlesMetadata } from "@/lib/article-metadata";
import { getArticle } from "@/lib/articles";

const subject: Subjects = "swt";
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
				components={{ RumpeQuiz }}
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
