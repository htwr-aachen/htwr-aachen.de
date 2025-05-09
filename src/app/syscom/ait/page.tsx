import type { Metadata } from "next";

import Content from "./content.mdx";
import urlJoin from "@/lib/url";
import { institute } from "../config";

export const metadata: Metadata = {
  title: "AIT: Wenn Datkom nicht schon genug war",
  description: "Ich will mehr",
  alternates: {
    canonical: urlJoin(institute, "ait"),
  },
};

export default async function Page() {
  return (
    <Content
      components={
        {
          /* Hier lassen sich lokal extra components einfügen */
        }
      }
    ></Content>
  );
}
