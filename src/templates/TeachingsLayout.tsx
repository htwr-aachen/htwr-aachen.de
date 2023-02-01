import Link from "next/link";
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
    <article className="markdown">
      <div>
        <h1 className="inline text-2xl font-bold">{meta.meta.title}</h1> |{" "}
        <Link href={"/teaching"}>Back to Overview</Link>
      </div>

      <div className="rounded-md border-2 border-black bg-slate-100 px-4">
        {children}
      </div>

      <div>
        <Link href={"/teaching"}>Back to Overview</Link> |
        {context.prev != null ? (
          <>
            {" "}
            Vorheriges:{" "}
            <Link href={`/teachings/${context.prev?.slug}`}>
              {context.prev?.meta.title}
            </Link>{" "}
            |{" "}
          </>
        ) : (
          <></>
        )}
        {context.next != null ? (
          <>
            {" "}
            Nächstes:{" "}
            <Link href={`/teachings/${context.next?.slug}`}>
              {context.next?.meta.title}
            </Link>{" "}
            |{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

export default TeachingsLayout;
