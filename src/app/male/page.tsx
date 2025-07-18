import type { Metadata } from "next";
import Content from "./content.mdx";

import {
  Gallery,
  GalleryImage,
  GalleryItem,
  GalleryLabel,
} from "@/components/rwth/gallery";

import { MaterialienSchnellzugriff } from "./Schnellzugriff";

export const metadata: Metadata = {
  description: "MALE content",
  alternates: {
    canonical: "/male",
  },
};

export default function IndexPage() {
  return (
    <div>
      <Gallery>
        <GalleryItem>
          <GalleryImage
            src={"/assets/male/closed-frequent-itemsets.png"}
            alt="closed frequent itemsets are closed and frequent"
            width={300}
            height={50}
          ></GalleryImage>
          <GalleryLabel headline="Danke Wil" url="/male">
            Tja
          </GalleryLabel>
        </GalleryItem>

        <GalleryItem>
          <GalleryImage
            src={"/assets/male/comes.jpg"}
            alt="comes at work with bike?"
            width={700}
            height={400}
          ></GalleryImage>
          <GalleryLabel headline="Folienschätze..." url="/male">
            Anstößig
          </GalleryLabel>
        </GalleryItem>
      </Gallery>

      <div className="prose mx-auto px-2 py-12 text-black lg:max-w-[100ch] lg:px-0">
        <Content />
      </div>
      <MaterialienSchnellzugriff />
    </div>
  );
}
