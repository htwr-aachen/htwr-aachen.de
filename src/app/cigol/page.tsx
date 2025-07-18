import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  description: "Informatische Grundlagen der Mathematik",
  alternates: {
    canonical: "/cigol",
  },
};

export default function CIGOLPage() {
  return (
    <div className="prose mx-auto px-2 text-black lg:max-w-[100ch] lg:px-0">
      <Content />
    </div>
  );
}
