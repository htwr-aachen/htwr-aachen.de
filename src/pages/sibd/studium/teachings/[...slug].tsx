import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import type { GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import type { FC } from "react";

import RumpeQuiz from "@/components/RumpeQuiz";
import Spoiler from "@/components/spoiler";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import TeachingsLayout from "@/layouts/rwth/TeachingsLayout";
import type { Teaching as TeachingType } from "@/lib/teachings";
import {
  getAllTeachings,
  getTeachingBySlug,
  getTeachingWithHigherOrder,
  getTeachingWithLowerOrder,
} from "@/lib/teachings";

import { TeachingsDirectory } from ".";

const components = {
  Spoiler,
  RumpeQuiz,
  Mermaid,

  img: (props: any) => {
    return <img {...props} loading="lazy" className="centerImg" alt="" />;
  },
};

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
          title={`${doc?.meta?.title} - SIBD@HTWR`}
          description={doc?.meta?.description}
        ></Meta>
      }
      institute="sibd"
    >
      <TeachingsLayout
        meta={{ slug: doc?.slug, meta: doc?.meta }}
        context={context}
        instituteName="sibd"
        instituteUrl="/sibd"
        overviewUrl="/sibd/studium/teachings"
      >
        {doc === null || doc.content === null || doc.content === undefined ? (
          <div></div>
        ) : (
          <MDXRemote {...doc?.content} components={components} lazy />
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
