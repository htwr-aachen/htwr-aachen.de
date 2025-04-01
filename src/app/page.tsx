import type { Metadata } from "next";
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
import ExportedImage from "next-image-export-optimizer";

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
            src={"/assets/other/bluecard-extended.jpg"}
            alt="Bluecard??"
            width={900}
            height={600}
          ></GalleryImage>
          <GalleryLabel headline="Ich kann das alles nichtmehr">
            Warum zwei Farben? Warum alles?
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={"/assets/rwth/gallery/star.png"}
            alt="GitHub Stars 👉️👈️?"
            width={600}
            height={400}
          ></GalleryImage>
          <GalleryLabel
            headline="GitHub Stars 👉️👈️?"
            externalUrls={[
              {
                url: "https://github.com/jonsch318/htwr-aachen.de",
                text: "GitHub Link",
              },
            ]}
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
            src={"/assets/rwth/gallery/htwr_zentrum_informatik.png"}
            alt="HTWR Zentrum Informatik"
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
        <GalleryItem>
          <GalleryImage
            src={"/assets/other/moodle-loading.png"}
            alt="Einen Moment bitte"
            width={1920}
            height={975}
          ></GalleryImage>
          <GalleryLabel
            headline="Exzellenz-Websites"
            externalUrls={[
              {
                url: "https://addons.mozilla.org/de/firefox/addon/quality-of-rwth",
                text: "Firefox",
              },
              {
                url: "https://chromewebstore.google.com/detail/hhjhbkpidgloeeflpnoajpicjhocbdjk",
                text: "Chromium-Basiertes",
              },
            ]}
          >
            Die Quality of RWTH Browser Extension überspringt automatisiert
            unnötige Logins und beschleunigt den Moodle Workflow.
          </GalleryLabel>
        </GalleryItem>
      </Gallery>
      <div>
        <Persona>
          {Object.values(RealInstituteConfig).map((institute: Institute) => {
            return (
              <PersonaElement href={institute.href} key={institute.name}>
                <ExportedImage
                  className="relative mx-auto mb-2 size-[32px] brightness-0"
                  src={institute.icon}
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
