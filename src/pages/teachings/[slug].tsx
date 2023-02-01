import type { GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import type { Teaching as TeachingType } from "@/lib/teachings";
import { getAllTeachings, getTeachingBySlug } from "@/lib/teachings";
import { Main } from "@/templates/Main";

import TeachingsLayout from "../../templates/TeachingsLayout";

const Teaching: FC<TeachingType> = ({ slug, meta, content }) => {
  return (
    <Main meta={<Meta title={meta.title} description={meta.description} />}>
      <TeachingsLayout meta={{ slug, meta }}>
        <MDXRemote {...content} />
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
  return {
    props: doc,
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
