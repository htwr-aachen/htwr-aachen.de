import type { GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import type { FC } from "react";

import ISOOSI from "@/components/isoosi";
import Spoiler from "@/components/spoiler";
import { Meta } from "@/layouts/Meta";
import type { Teaching as TeachingType } from "@/lib/teachings";
import {
  getAllTeachings,
  getTeachingBySlug,
  getTeachingWithHigherOrder,
  getTeachingWithLowerOrder,
} from "@/lib/teachings";
import { Main } from "@/templates/syscom/Main";
import TeachingsLayout from "@/templates/syscom/TeachingsLayout";

const components = { ISOOSI, Spoiler };

type TeachingProps = {
  doc: TeachingType;
  context: {
    prev: TeachingType | null;
    next: TeachingType | null;
  };
};

const Teaching: FC<TeachingProps> = ({ doc, context }) => {
  return (
    <Main
      meta={<Meta title={doc.meta.title} description={doc.meta.description} />}
    >
      <TeachingsLayout
        meta={{ slug: doc.slug, meta: doc.meta }}
        context={context}
      >
        <MDXRemote {...doc.content} components={components} />
      </TeachingsLayout>
    </Main>
  );
};

export default Teaching;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  const doc = await getTeachingBySlug(params.slug as string);

  const prev = await getTeachingWithLowerOrder(doc.meta.order);
  const next = await getTeachingWithHigherOrder(doc.meta.order);

  return {
    props: {
      doc: doc || null,
      context: {
        prev,
        next,
      },
    },
  };
};

export async function getStaticPaths() {
  const docs = await getAllTeachings();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}
