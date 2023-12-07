import { join } from "path";

import View from "@/components/teachings/View";
import Main from "@/layouts/Main";
import TeachingsLayout from "@/layouts/rwth/TeachingsLayout";
import {
  getTeachingBySlug,
  getTeachingWithHigherOrder,
  getTeachingWithLowerOrder,
  type TeachingMeta,
} from "@/lib/teachings-next";
import { API_URL, DefaultTeachingDir } from "@/utils/TeachingConfig";

const TeachingDir = join(DefaultTeachingDir, "cesti");

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
        <View institute="cesti" slug={params.slug} />
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
