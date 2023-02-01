import Link from "next/link";
import type { FC } from "react";

import type { TeachingMeta } from "@/lib/teachings";

type TeachingsLayoutProps = {
  children: React.ReactNode;
  meta: TeachingMeta;
};

const TeachingsLayout: FC<TeachingsLayoutProps> = ({ children, meta }) => {
  return (
    <article className="markdown">
      <div>
        <h1 className="inline text-2xl font-bold">{meta.meta.title}</h1> |{" "}
        <Link href={"/teaching"}>Back to Overview</Link>
      </div>

      <div className="rounded-md border-2 border-black bg-slate-100 px-4">
        {children}
      </div>
    </article>
  );
};

export default TeachingsLayout;
