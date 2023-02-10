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
    <article className="markdown line-numbers">
      <div>
        <h1 className="inline text-2xl font-bold">{meta.meta.title}</h1> |{" "}
        <Link href={"/es/teachings"}>Back to Overview</Link>
      </div>

      <div className="m-4 border-1 border-gray-600 p-4 pb-8 lg:px-8">
        {children}
      </div>

      <div>
        <Link href={"/es/teachings"}>Back to Overview</Link>
        {context.prev != null ? (
          <>
            | Vorheriges:{" "}
            <Link href={`/es/teachings/${context.prev?.slug}`}>
              {context.prev?.meta.title}
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {context.next != null ? (
          <>
            | Nächstes:{" "}
            <Link href={`/es/teachings/${context.next?.slug}`}>
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
