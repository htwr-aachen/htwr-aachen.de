import TeachingsLayout from "@/layouts/rwth/TeachingsLayout";
import {
  getAllTeachings,
  getTeachingBySlug,
  getTeachingWithHigherOrder,
  getTeachingWithLowerOrder,
} from "@/lib/teachings";

import { TeachingsDirectory } from "../teachingConfig";
import { MDXContent } from "./mdx-content";

async function getData(slug: string[]) {
  if (!slug) return { doc: null, context: { prev: null, next: null } };

  const doc = await getTeachingBySlug(TeachingsDirectory, slug);

  if (!doc)
    return {
      doc: null,
      context: {
        prev: null,
        next: null,
      },
    };

  const context = {
    prev: await getTeachingWithLowerOrder(
      TeachingsDirectory,
      doc.meta?.order || 0
    ),
    next: await getTeachingWithHigherOrder(
      TeachingsDirectory,
      doc.meta?.order || 0
    ),
  };

  return {
    doc,
    context,
  };
}

export default async function TeachingPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { doc, context } = await getData(params?.slug);

  return (
    <TeachingsLayout
      meta={{
        slug: doc?.slug || "",
        meta: doc?.meta || { images: [], order: -1 },
      }}
      context={context}
      instituteName="WSI"
      instituteUrl="/wsi"
      overviewUrl="/wsi/studium/teachings"
    >
      {doc === null || doc.content === null || doc.content === undefined ? (
        <div></div>
      ) : (
        <MDXContent source={doc?.content} />
      )}
    </TeachingsLayout>
  );
}

export async function generateStaticParams() {
  const docs = await getAllTeachings(TeachingsDirectory);
  return docs.map((doc) => ({
    params: {
      slug: doc.slug,
    },
  }));
}
