import { format } from "date-fns";
import Link from "next/link";

import { getArticlesMetadata } from "@/lib/article-metadata";

import { blogArticleConfig } from "./config";

export default async function Page() {
	const blogs = await getArticlesMetadata(blogArticleConfig);
	return (
		<div className="mx-auto max-w-prose">
			<h1 className="my-6 scroll-m-20 font-sans text-4xl font-bold lg:text-5xl">
				HTWR Blog
			</h1>
			<p className="my-6 leading-7">
				Hier gibt es Informationen rund um HTWR. Um geplante Aktionen, neue
				Inhalte oder auch Memes.
			</p>
			<ul>
				{blogs.map((blog) => {
					return (
						<li key={blog.meta.title}>
							<Link href={blog.url} className="text-muted-foreground">
								<div className="bg-muted text-muted-foreground my-6 grid w-full grid-cols-[1fr_auto] rounded-lg px-6 py-4 text-lg">
									<h2 className="text-foreground text-xl font-medium">
										{blog.meta.fullTitle || blog.meta.title}
									</h2>
									<span className="no-b mr-0 ml-auto">
										{format(new Date(blog.meta.date), "dd.MM.yyyy")}
									</span>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
