"use client";

import Link from "next/link";
import { ArticleJsonLd } from "next-seo";
import type { FC } from "react";

import type { TeachingMeta } from "@/lib/teachings";

type TeachingsLayoutProps = {
  children: React.ReactNode;
  meta: TeachingMeta;
  context: {
    prev: TeachingMeta | null;
    next: TeachingMeta | null;
  };
  instituteName: string;
  instituteUrl: string;
  overviewUrl: string;
};

const TeachingsLayout: FC<TeachingsLayoutProps> = ({
  children,
  meta,
  context,
  overviewUrl = "",
}) => {
  return (
    <article className="markdown line-numbers">
      <ArticleJsonLd
        type="Article"
        url={`https://www.htw-aachen.de/scil/studium/teachings/${meta.slug}`}
        datePublished={meta.meta.date || ""}
        authorName={meta.meta.author || ""}
        publisherName="SCIL@HTW Aachen"
        publisherLogo="https://www.htw-aachen.de/assets/rwth/htwr.png"
        title={meta.meta.title || ""}
        description={meta.meta.description || ""}
        images={meta.meta.images || []}
      />
      <div>
        <h1 className="inline text-2xl font-bold">{meta.meta.title}</h1> |{" "}
        <Link href={overviewUrl}>Back to Overview</Link>
      </div>

      <div className="wrapper m-4 border-1 border-gray-600 p-4 pb-8 lg:px-8 ">
        {children}
      </div>

      <div>
        <Link href={overviewUrl}>Back to Overview</Link>
        {context.prev != null ? (
          <>
            | Vorheriges:{" "}
            <Link href={`${overviewUrl}/${context.prev?.slug}`}>
              {context.prev?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {context.next != null ? (
          <>
            | Nächstes:{" "}
            <Link href={`${overviewUrl}/${context.next?.slug}`}>
              {context.next?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

export default TeachingsLayout;
