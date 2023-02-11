import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import type { GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import type { FC } from "react";

import RumpeQuiz from "@/components/RumpeQuiz";
import Spoiler from "@/components/spoiler";
import { Meta } from "@/layouts/Meta";
import type { Teaching as TeachingType } from "@/lib/teachings";
import {
  getAllTeachings,
  getTeachingBySlug,
  getTeachingWithHigherOrder,
  getTeachingWithLowerOrder,
} from "@/lib/teachings";
import { Main } from "@/templates/scil/Main";
import TeachingsLayout from "@/templates/scil/TeachingsLayout";

import { TeachingsDirectory } from "./index";

const components = { Spoiler, RumpeQuiz, Mermaid };

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
      meta={
        <Meta
          title={`SCIL@HTWR-${doc?.meta?.title}`}
          description={doc?.meta?.description}
        ></Meta>
      }
    >
      <TeachingsLayout
        meta={{ slug: doc?.slug, meta: doc?.meta }}
        context={context}
      >
        {doc === null || doc.content === null || doc.content === undefined ? (
          <div></div>
        ) : (
          <MDXRemote {...doc?.content} components={components} />
        )}
      </TeachingsLayout>
    </Main>
  );
};

export default Teaching;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      props: {},
    };
  }

  const slug = Array.isArray(params.slug) ? params.slug : [params.slug];

  const doc = await getTeachingBySlug(TeachingsDirectory, slug);

  const prev = await getTeachingWithLowerOrder(
    TeachingsDirectory,
    doc.meta.order
  );
  const next = await getTeachingWithHigherOrder(
    TeachingsDirectory,
    doc.meta.order
  );

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
  const docs = await getAllTeachings(TeachingsDirectory);

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug.split("/"),
        },
      };
    }),
    fallback: false,
  };
}
