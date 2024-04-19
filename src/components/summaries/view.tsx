import { MDXRemote } from "next-mdx-remote/rsc";
import type { HTMLAttributes } from "react";
import { Suspense } from "react";

import type { Subjects } from "@/config/subjects";
import { mdxOptions } from "@/lib/markdown";
import { getSummary } from "@/lib/summaries";

import { DefaultSummaryComponents } from "./components";
import SummaryLayout from "./layout";

export default async function SummaryView({
  subject,
  slug,
  components = {},
  ...props
}: {
  subject: Subjects;
  slug: string[];
  components?: any;
} & HTMLAttributes<HTMLDivElement>) {
  const summary = await getSummary(slug, subject);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SummaryLayout
        subject={subject}
        meta={summary}
        prev={summary.prev}
        next={summary.next}
        {...props}
      >
        <MDXRemote
          source={summary.content}
          options={mdxOptions}
          components={{ ...DefaultSummaryComponents, ...components }}
        />
      </SummaryLayout>
    </Suspense>
  );
}
