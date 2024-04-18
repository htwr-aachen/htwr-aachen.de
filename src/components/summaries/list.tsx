import Link from "next/link";

import type { Subjects } from "@/config/subjects";
import { getSummariesMetadata } from "@/lib/summaries";
import urlJoin from "@/lib/url";

import { SummaryListDate } from "./date";

interface SummaryListProps {
  subject: Subjects;
}

export default async function SummaryList(props: SummaryListProps) {
  const summaries = await getSummariesMetadata(props.subject);
  return (
    <ul className="not-prose mt-8">
      {summaries.map((summary) => {
        const slug = urlJoin(...summary.slug);
        return (
          <li key={slug} className="my-2 grid lg:grid-cols-[auto_1fr]">
            <div className="grid items-center">
              <Link
                className="grid items-center justify-center rounded bg-[#eee] px-2 py-1 hover:border-b-0 hover:bg-[#ddd]"
                href={summary.url}
              >
                {summary.meta.title}
              </Link>
            </div>
            <div className="ml-2 flex items-center">
              <SummaryListDate date={summary.meta.date || ""} />
              <ul className="flex flex-wrap">
                {summary.meta.tags?.map((tag) => {
                  return (
                    <li key={tag}>
                      <span className="mr-1 whitespace-nowrap rounded-md bg-secondary px-1 py-[2px] text-sm text-secondary-foreground opacity-50">
                        {tag}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
