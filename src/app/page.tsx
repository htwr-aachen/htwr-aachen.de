import type { Metadata } from "next";
import Image from "next/image";
import type { FC } from "react";

import {
  Gallery,
  GalleryImage,
  GalleryItem,
  GalleryLabel,
} from "@/components/rwth/gallery";
import { Persona, PersonaElement } from "@/components/rwth/persona";
import { RealInstituteConfig } from "@/config/institutes";
import { Main } from "@/layouts/rwth/Main";
import { findAssociatedSubjects } from "@/lib/subjects";
import type { Institute } from "@/models/institutes";

export const metadata: Metadata = {
  title: "HTWR Aachen - Die beste Hilfe für ihren Doppelgänger",
  description:
    "HTWR Aachen ist hier die wahre Exzellenzuniversität. Wir helfen wo der Doppelgänger versagt... ",
  alternates: {
    canonical: "/",
  },
};

const Index: FC = () => {
  return (
    <Main institute="htwr" fullWidth addPadding={false}>
      <Gallery>
        <GalleryItem>
          <GalleryImage
            src={"/assets/rwth/gallery/star.png"}
            alt="GitHub Stars 👉️👈️?"
            width={600}
            height={400}
          ></GalleryImage>
          <GalleryLabel
            headline="GitHub Stars 👉️👈️?"
            externalUrl="https://github.com/jonsch318/htwr-aachen.de"
            externalUrlText="GitHub Link"
          >
            Ziel 100 Sterne.
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={"/assets/rwth/gallery/exzelenz.jpg"}
            alt="SCIL Banner"
            width={700}
            height={500}
          ></GalleryImage>
          <GalleryLabel headline="Exzellenzuniversität" url="/scil/studium">
            Reduziert eure Erwartungen...
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={"/assets/rwth/gallery/informatikzentrum.png"}
            alt="Informationzentrum"
            width={300}
            height={500}
          ></GalleryImage>
          <GalleryLabel headline="Realität" url="/scil/studium">
            Jeden Tag leiden mehr und mehr Studenten unter den Höllischen Qualen
            des Informatikzentrums
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={"/assets/rwth/gallery/karman.jpeg"}
            alt="Erlösungstor"
            width={700}
            height={500}
          ></GalleryImage>
          <GalleryLabel headline="WARUM?" url="/scil/studium">
            Warum sieht das Ende so gut aus?
          </GalleryLabel>
        </GalleryItem>
      </Gallery>
      <div>
        <Persona>
          {Object.values(RealInstituteConfig).map((institute: Institute) => {
            return (
              <PersonaElement href={institute.href} key={institute.name}>
                <Image
                  className="relative mx-auto mb-2 size-[32px] brightness-0"
                  src={institute.icon || "/assets/scil/scil_icon.svg"}
                  alt={institute.fullName}
                  width={32}
                  height={32}
                />
                {institute?.displayName || institute.name} /{" "}
                {findAssociatedSubjects(institute.name)}
              </PersonaElement>
            );
          })}
        </Persona>
      </div>
    </Main>
  );
};

export default Index;
