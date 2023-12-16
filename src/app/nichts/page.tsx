import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";

import { BackButton } from "./back";

export const metadata: Metadata = {
  title: "Nichts",
  description: "wirklich nichts (SEO bedingt)",
  alternates: {
    canonical: "/nichts",
  },
};

export default function Page() {
  return (
    <Main institute="htwr">
      <HeadLine>SEO Placeholder.</HeadLine>
      <BackButton />
    </Main>
  );
}
