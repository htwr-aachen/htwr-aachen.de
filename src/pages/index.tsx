import "katex/dist/katex.min.css";

import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";

import {
  Gallery,
  GalleryImage,
  GalleryItem,
  GalleryLabel,
} from "@/components/rwth/gallery";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import { getRealInstitutes } from "@/lib/institutes";

type PersonaElementProps = {
  children: ReactNode;
  href: string;
};
const PersonaElement: FC<PersonaElementProps> = ({ children, href }) => {
  return (
    <li className="h-[115px]">
      <Link
        className="grid h-full items-center justify-center px-2 py-5 text-center text-sm text-black hover:border-b-0 hover:bg-white/75 lg:px-5 lg:text-base"
        href={href}
      >
        <div>{children}</div>
      </Link>
    </li>
  );
};

type PersonaProps = {
  children: ReactNode;
};
const Persona: FC<PersonaProps> = ({ children }) => {
  return (
    <ul className="flex min-h-[115px] flex-wrap items-center justify-center bg-rwth-warn px-2">
      {children}
    </ul>
  );
};

const Index: FC = () => {
  return (
    <Main
      meta={
        <Meta
          title="HTWR Aachen - Die beste Hilfe für seinen Doppelgänger"
          description="HTWR Aachen ist hier die wahre Exzellenzuniversität. Wir helfen wo der Doppelgänger versagt... "
        ></Meta>
      }
      institute="htwr"
      pad
    >
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
