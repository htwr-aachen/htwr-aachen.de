"use client";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";

import Spoiler from "@/components/spoiler";

const components = {
  Spoiler,

  img: (props: any) => {
    return <img {...props} loading="lazy" className="centerImg" alt="" />;
  },
};

type MDXContentProps = {
  source: MDXRemoteSerializeResult;
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div>
      <MDXRemote {...source} components={components} />
    </div>
  );
}
