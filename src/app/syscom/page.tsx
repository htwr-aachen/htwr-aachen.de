import type { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Syscom - Das besser ComSys",
  description: "Für alle die nichts besseres zu tun haben als DatKom zu lernen",
  alternates: {
    canonical: "/syscom",
  },
};

export default function Page() {
  return (
    <div className="prose mx-auto text-black lg:max-w-[100ch]">
      <Content />
    </div>
  );
}
