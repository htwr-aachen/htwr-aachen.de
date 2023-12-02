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
import Main from "@/layouts/Main";
import { getRealInstitutes } from "@/lib/institutes";

export const metadata: Metadata = {
  title: "HTWR Aachen - Die beste Hilfe für ihren Doppelgänger",
  description:
    "HTWR Aachen ist hier die wahre Exzellenzuniversität. Wir helfen wo der Doppelgänger versagt... ",
};

const Index: FC = () => {
  return (
    <Main institute="htwr" pad>
      <Gallery>
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
          {getRealInstitutes().map((institute) => {
            return (
              <PersonaElement href={institute.href} key={institute.name}>
                <Image
                  className="relative mx-auto mb-2 h-[32px] w-[32px] brightness-0"
                  src={institute.icon || "/assets/scil/scil_icon.svg"}
                  alt={institute.fullName}
                  width={32}
                  height={32}
                />
                {institute.name} / {institute.subject}
              </PersonaElement>
            );
          })}
        </Persona>
      </div>
    </Main>
  );
};

export default Index;
