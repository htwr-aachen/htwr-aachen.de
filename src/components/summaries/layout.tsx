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
  return (
    <article className="markdown line-numbers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJSONLD(props.meta)),
        }}
      />
      <div>
        <h1 className="inline text-2xl font-bold">{props.meta.meta.title}</h1> |{" "}
        <Link href={props.subjectConfig.articlesURL}>Back to Overview</Link>
      </div>
      <div
        className={`wrapper m-4 border-1 border-gray-600 p-4 pb-8 lg:px-8 ${props.className}`}
        /* @next-codemod-error 'props' is used with spread syntax (...). Any asynchronous properties of 'props' must be awaited when accessed. */
        {...props}
      >
        {props.children}
      </div>
      <div>
        <Link href={props.subjectConfig.articlesURL}>Back to Overview</Link>{" "}
        {props.prev != null ? (
          <>
            | Vorheriges:{" "}
            <Link
              href={`${props.subjectConfig.articlesURL}/${props.prev?.slug}`}
            >
              {props.prev?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {props.next != null ? (
          <>
            | Nächstes:{" "}
            <Link
              href={`${props.subjectConfig.articlesURL}/${props.next?.slug}`}
            >
              {props.next?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
}
