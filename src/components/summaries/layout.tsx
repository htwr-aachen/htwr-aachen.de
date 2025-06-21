import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

import type { ArticleMeta } from "@/lib/articles";
import { getJSONLD } from "@/lib/articles";
import type { Subject } from "@/models/subject";
import { cn } from "@/lib/utils";

export default function SummaryLayout(
  props: {
    children: ReactNode;
    meta: ArticleMeta;
    subjectConfig: Subject;
    next?: ArticleMeta;
    prev?: ArticleMeta;
  } & HTMLAttributes<HTMLDivElement>,
) {
  const { children, meta, subjectConfig, next, prev, ...divProps } = props;
  return (
    <article className="markdown line-numbers mx-auto w-[100ch]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJSONLD(meta)),
        }}
      />
      <div className="mb-6">
        <h1 className="inline text-2xl font-bold">{meta.meta.title}</h1>
        <span className="mx-3 inline">|</span>
        <Link href={subjectConfig.articlesURL}>Back to Overview</Link>
      </div>
      <div
        className={cn("wrapper mb-6 py-3", divProps.className)}
        {...divProps}
      >
        {children}
      </div>
      <div>
        <Link href={subjectConfig.articlesURL}>Back to Overview</Link>{" "}
        {prev && (
          <>
            | Vorheriges:{" "}
            <Link href={`${subjectConfig.articlesURL}/${prev?.slug}`}>
              {prev?.meta.title}
            </Link>{" "}
          </>
        )}
        {next && (
          <>
            | Nächstes:{" "}
            <Link href={`${subjectConfig.articlesURL}/${next?.slug}`}>
              {next?.meta.title}
            </Link>{" "}
          </>
        )}
      </div>
    </article>
  );
}
