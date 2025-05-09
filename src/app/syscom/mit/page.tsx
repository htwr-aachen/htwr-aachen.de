import type { Metadata } from "next";

import Content from "./content.mdx";
import urlJoin from "@/lib/url";
import { institute } from "../config";

export const metadata: Metadata = {
  title: "Alles Rund um MIT",
  description: "Mobil bleiben",
  alternates: {
    canonical: urlJoin(institute, "mit"),
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
