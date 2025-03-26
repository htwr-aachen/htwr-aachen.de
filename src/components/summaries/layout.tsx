import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

import type { ArticleMeta } from "@/lib/articles";
import { getJSONLD } from "@/lib/articles";
import type { Subject } from "@/models/subject";

export default function SummaryLayout(
  props: {
    children: ReactNode;
    meta: ArticleMeta;
    subjectConfig: Subject;
    next?: ArticleMeta;
    prev?: ArticleMeta;
  } & HTMLAttributes<HTMLDivElement>,
) {
  const { children, meta, subjectConfig, next, prev, ...divProps} = props
  return (
    <article className="markdown line-numbers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJSONLD(meta)),
        }}
      />
      <div>
        <h1 className="inline text-2xl font-bold">{meta.meta.title}</h1> |{" "}
        <Link href={subjectConfig.articlesURL}>Back to Overview</Link>
      </div>
      <div
        className={`wrapper m-4 border-1 border-gray-600 p-4 pb-8 lg:px-8 ${divProps.className}`}
        {...divProps}
      >
        {children}
      </div>
      <div>
        <Link href={subjectConfig.articlesURL}>Back to Overview</Link>{" "}
        {prev != null ? (
          <>
            | Vorheriges:{" "}
            <Link
              href={`${subjectConfig.articlesURL}/${prev?.slug}`}
            >
              {prev?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {next != null ? (
          <>
            | Nächstes:{" "}
            <Link
              href={`${subjectConfig.articlesURL}/${next?.slug}`}
            >
              {next?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
}
