import { getTeaching, mdxOptions } from "@/lib/teachings-next";
import { StringInstitutes } from "@/models/institutes";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import RumpeQuiz from "../RumpeQuiz";
import Spoiler from "../spoiler";

export const DefaultComponents = {
  Spoiler,
  RumpeQuiz,

  img: (props: any) => {
    return <img {...props} loading="lazy" className="centerImg" alt="" />;
  },
};

export default async function View(props: {
  institute: StringInstitutes;
  slug: string[];
  components?: any;
}) {
  const teaching = getTeaching(props.institute, props.slug);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MDXRemote
        source={await teaching.teching}
        options={mdxOptions}
        components={{ ...DefaultComponents, ...props.components }}
      />
    </Suspense>
  );
}
