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
};

const TeachingsLayout: FC<TeachingsLayoutProps> = ({
  children,
  meta,
  context,
}) => {
  return (
    <article className="markdown line-numbers">
      <ArticleJsonLd
        type="Article"
        url={`https://www.htw-aachen.de/cigol/teachings/${meta.slug}`}
        datePublished={meta.meta.date || ""}
        authorName={meta.meta.author || ""}
        publisherName="CIGOL@HTW Aachen"
        publisherLogo="https://www.htw-aachen.de/assets/rwth/htwr.png"
        title={meta.meta.title || ""}
        description={meta.meta.description || ""}
        images={meta.meta.images || []}
      />
      <div>
        <h1 className="inline text-2xl font-bold">{meta.meta.title}</h1> |{" "}
        <Link href={"/cigol/teachings"}>Back to Overview</Link>
      </div>

      <div className="m-4 rounded-lg border-1 border-[#c1bcb2] bg-[#f5eedd] p-4 pb-8 lg:px-8">
        {children}
      </div>

      <div>
        <Link href={"/cigol/teachings"}>Back to Overview</Link>
        {context.prev != null ? (
          <>
            | Vorheriges:{" "}
            <Link href={`/cigol/teachings/${context.prev?.slug}`}>
              {context.prev?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {context.next != null ? (
          <>
            | Nächstes:{" "}
            <Link href={`/cigol/teachings/${context.next?.slug}`}>
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
