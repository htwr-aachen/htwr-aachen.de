import type { Metadata } from "next";
import type { FC } from "react";

import { Gallery, GalleryLabel } from "@/components/rwth/gallery";
import { HeadLine } from "@/components/rwth/headline";

import { SCILSchnellzugriff } from "./schnellzugriff";
import ExportedImage from "next-image-export-optimizer";
import SCILBanner from "@/public/assets/scil/banner.png";
import MartinaGrohe from "@/public/assets/scil/martina_grohe.jpg";

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
        Viel Glück an die BuK Zweitschreiber. Es wird <b>gottlos</b>
      </HeadLine>

      <Gallery>
        <div className="relative">
          <ExportedImage
            src={SCILBanner}
            alt="SCIL Banner"
            className="block size-auto max-h-[500px] object-contain"
            width={700}
            height={500}
          />
          <GalleryLabel headline="Aktuelle Forschung" url="/scil/studium">
            Jetzt wird gebukked
          </GalleryLabel>
        </div>
        <div className="relative">
          <ExportedImage
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
        </div>
      </Gallery>

      <div className="grid grid-rows-2 lg:grid-cols-[1fr_350px] lg:grid-rows-1">
        <div></div>
        <SCILSchnellzugriff />
      </div>
    </div>
  );
};

export default SCIL;
