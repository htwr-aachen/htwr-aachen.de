import type { Metadata } from "next";
import Link from "next/link";

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
            width={700}
            height={200}
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

      <p className="mb-8 text-lg">
        Das jetzt doof mit dem neuen Fach. Viel anbieten kann ich hier auch
        nicht. Ich weiß auch gar nicht ob ich eine Zusammenfassung schreibe, da
        ich ja schon am{" "}
        <a href="https://panikzettel.htwr-aachen.de">Panikzettel</a> arbeite.
        Falls wer also Lust auf Zusammenfassung schreiben hat. Einfach einen
        Fork machen und unter /teachings/male/[name] Markdown schreiben :)
      </p>

      <Link href="/panikzettel">Panikzettel</Link>

      <MaterialienSchnellzugriff />
    </div>
  );
}
