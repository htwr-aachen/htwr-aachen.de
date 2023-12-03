import { MDXRemote } from "next-mdx-remote/rsc";
import { join } from "path";

import RumpeQuiz from "@/components/RumpeQuiz";
import Spoiler from "@/components/spoiler";
import Main from "@/layouts/Main";
import TeachingsLayout from "@/layouts/rwth/TeachingsLayout";
import {
  type TeachingMeta,
  getTeachingBySlug,
  getTeachingWithHigherOrder,
  getTeachingWithLowerOrder,
  mdxOptions,
} from "@/lib/teachings-next";
import { API_URL, DefaultTeachingDir } from "@/utils/TeachingConfig";

const TeachingDir = join(DefaultTeachingDir, "cesti");

const components = {
  Spoiler,
  RumpeQuiz,

  img: (props: any) => {
    return <img {...props} loading="lazy" className="centerImg" alt="" />;
  },
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const doc = await getTeachingBySlug(TeachingDir, params.slug);

  if (!doc) {
    throw Error("no page");
  }

  const prev = await getTeachingWithLowerOrder(TeachingDir, doc.meta.order);
  const next = await getTeachingWithHigherOrder(TeachingDir, doc.meta.order);

  return (
    <Main institute="cesti">
      <TeachingsLayout
        meta={{ slug: doc?.slug, meta: doc?.meta }}
        instituteName="CES-TI"
        instituteUrl="/cesti"
        overviewUrl="/cesti/studium/teachings"
        context={{
          prev,
          next,
        }}
      >
        {doc === null || doc.content === null || doc.content === undefined ? (
          <div></div>
        ) : (
          <MDXRemote
            source={doc.content}
            components={components}
            options={mdxOptions}
          ></MDXRemote>
        )}
      </TeachingsLayout>
    </Main>
  );
}

export async function generateStaticParams() {
  const res: Response = await fetch(`${API_URL}/api/teachings?subject=cesti`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const teachings: TeachingMeta[] = await res.json();

  return teachings.map((t) => ({
    slug: t.slug.split("/"),
  }));
}
