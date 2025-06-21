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

import "../styles/cms.css";

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
            src="/assets/other/landing/bingo.jpg"
            alt="Bingo"
            width={600}
            height={400}
          />
          <GalleryLabel headline="Vorlesungsbingo" url="/bingo">
            Es ist jetzt da 🤯
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={"/assets/other/landing/star.png"}
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
            src={"/assets/other/landing/htwr_zentrum_informatik.png"}
            alt="HTWR Zentrum Informatik"
            width={300}
            height={500}
          ></GalleryImage>
          <GalleryLabel headline="Realität" url="/">
            Jeden Tag leiden mehr und mehr Studenten unter den Höllischen Qualen
            des Informatikzentrums
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={"/assets/other/landing/karman.jpeg"}
            alt="Erlösungstor"
            width={700}
            height={500}
          ></GalleryImage>
          <GalleryLabel
            headline="WARUM?"
            externalUrls={[
              { url: "https://bit.ly/getmeoutofrwth", text: "Machs nicht" },
            ]}
          >
            Warum sieht das Ende so gut aus?
          </GalleryLabel>
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src={"/assets/other/landing/moodle-loading.png"}
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
                {institute?.displayName || institute.name} / <br />
                {findAssociatedSubjects(institute.name).join(", ")}
              </PersonaElement>
            );
          })}
        </Persona>
      </div>
    </Main>
  );
};

export default Index;
