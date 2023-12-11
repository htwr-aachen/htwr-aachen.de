import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

import type { SubjectNames } from "@/data/subjects";
import { mdxOptions } from "@/lib/markdown";
import { getTeaching } from "@/lib/teaching";

import RumpeQuiz from "../RumpeQuiz";
import { HeadLine } from "../rwth/headline";
import Spoiler from "../spoiler";
import TeachingLayout from "./Layout";

export const DefaultComponents = {
  Spoiler,
  RumpeQuiz,

  img: (props: any) => {
    return (
      <img {...props} loading="lazy" className="centerImg" alt="" {...props} />
    );
  },
  h1: (props: any) => <HeadLine>{props.children}</HeadLine>,
};

interface TeachingViewProps extends React.HTMLAttributes<HTMLDivElement> {
  subject: SubjectNames;
  slug: string[];
  components?: any;
}

export default async function TeachingView(props: TeachingViewProps) {
  const teaching = await getTeaching(props.slug, props.subject);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TeachingLayout
        meta={teaching}
        prev={teaching.prev}
        next={teaching.next}
        {...props}
      >
        <MDXRemote
          source={teaching.content}
          options={mdxOptions}
          components={{ ...DefaultComponents, ...props.components }}
        />
      </TeachingLayout>
    </Suspense>
  );
}
