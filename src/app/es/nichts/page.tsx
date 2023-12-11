import type { Metadata } from "next";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";

export const metadata: Metadata = {
  title: "Nichts",
  description: "wirklich nichts (SEO bedingt)",
};

const NichtsPage: FC = () => {
  return (
    <div>
      <HeadLine>Also wirklich nichts</HeadLine>
    </div>
  );
};

export default NichtsPage;
