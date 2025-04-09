import type { Metadata } from "next";
import type { FC } from "react";

import { Gallery, GalleryLabel } from "@/components/rwth/gallery";
import { HeadLine } from "@/components/rwth/headline";

import { SCILSchnellzugriff } from "./schnellzugriff";
import MartinaGrohe from "@/public/assets/scil/martina_grohe.jpg";
import Image from "next/image";

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
          <img
            src="/assets/scil/banner.png"
            alt="SCIL Banner"
            className="block size-auto max-h-[500px] object-contain"
            width={800}
            height={600}
          />
          <GalleryLabel headline="Aktuelle Forschung" url="/scil/studium">
            Jetzt wird gebukked
          </GalleryLabel>
        </div>
        <div className="relative">
          <Image
            src={MartinaGrohe}
            alt="Martina Grohe"
            className="block size-auto max-h-[500px] object-contain"
            width={400}
            height={600}
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
