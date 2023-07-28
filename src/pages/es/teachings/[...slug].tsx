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
import { Main } from "@/layouts/es/Main";
import TeachingsLayout from "@/layouts/es/TeachingsLayout";

import { TeachingsDirectory } from "./index";

const components = { Spoiler, RumpeQuiz };

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
          title={`ES@HTWR-${doc?.meta?.title}`}
          description={doc?.meta?.description}
        ></Meta>
      }
    >
      <TeachingsLayout
        meta={{ slug: doc?.slug, meta: doc?.meta }}
        context={context}
      >
        <MDXRemote {...doc.content} components={components} lazy />
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

  const slug = Array.isArray(params.slug) ? params.slug : [params.slug];

  const doc = await getTeachingBySlug(TeachingsDirectory, slug);

  if (!doc)
    return {
      props: {
        doc: null,
        context: {
          prev: null,
          next: null,
        },
      },
      notFound: true,
    };

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
    notFound: !doc,
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
