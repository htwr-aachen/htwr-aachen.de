import type { Metadata } from "next";
import type { FC } from "react";

import {
  Gallery,
  GalleryImage,
  GalleryItem,
  GalleryLabel,
} from "@/components/rwth/gallery";
import { HeadLine } from "@/components/rwth/headline";

import Content from "./content.mdx";
import SCILBanner from "@/public/assets/scil/banner.png";
import MartinaGrohe from "@/public/assets/scil/martina_grohe.jpg";
import { SubjectList } from "@/components/subject-list";
import { subjects } from "./config";

export const metadata: Metadata = {
  description: "Jetzt wird gebuked",
  alternates: {
    canonical: "/scil",
  },
};

const SCIL: FC = () => {
  return (
    <div>
      <HeadLine>
        Es wird <b>gottlos</b>
      </HeadLine>

      <Gallery>
        <GalleryItem>
          <GalleryImage
            src={SCILBanner}
            alt="SCIL Banner"
            className="block size-auto max-h-[500px] object-contain"
            width={700}
            height={500}
          />
          <GalleryLabel headline="Aktuelle Forschung" url="/scil/studium">
            Jetzt wird gebukked
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={MartinaGrohe}
            alt="Martina Grohe"
            className="block size-auto max-h-[500px] object-contain"
            width={300}
            height={500}
          />
          <GalleryLabel
            headline="Ja Martina, i lern doch schon für BUK"
            url="/scil/studium"
          >
            Aber natürlich mit den tollen Hilfen von htwr-aachen.de, was auch
            sonst.
          </GalleryLabel>
        </GalleryItem>
      </Gallery>
      <div className="prose mx-auto px-2 py-12 text-black lg:max-w-[100ch] lg:px-0">
        <Content />
      </div>
      <SubjectList subjects={subjects} />
    </div>
  );
};

export default SCIL;
