import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";

import {
  Gallery,
  GalleryImage,
  GalleryItem,
  GalleryLabel,
} from "@/components/rwth/gallery";
import {
  NumberInput,
  SolutionCalculator,
} from "@/components/SolutionCalculator";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/rwth/Main";

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
      instituteName="MAIN"
      instituteTitle=""
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
          <PersonaElement href="/scil">
            <Image
              className="relative mx-auto mb-2 h-[32px] w-[32px]"
              src={"/assets/scil/scil_icon.svg"}
              alt={""}
              width={32}
              height={32}
            ></Image>
            SCIL / BuK
          </PersonaElement>
          <PersonaElement href="/es">
            <Image
              className="relative mx-auto mb-2 h-[32px] w-[32px]"
              src={"/assets/es/es_icon.svg"}
              alt={""}
              width={32}
              height={32}
            ></Image>
            ES / SWT
          </PersonaElement>
          <PersonaElement href="/syscom">
            <Image
              className="relative mx-auto mb-2 h-[32px] w-[32px]"
              src={"/assets/syscom/syscom_icon.svg"}
              alt={""}
              width={32}
              height={32}
            ></Image>
            SysCom / DatKom
          </PersonaElement>
          <PersonaElement href="/cigol">
            <Image
              className="relative mx-auto mb-2 h-[32px] w-[32px]"
              src={"/assets/cigol/cigol_icon.svg"}
              alt={""}
              width={32}
              height={32}
            ></Image>
            CIGOL / MaLo
          </PersonaElement>
        </Persona>

        <article className="my-20 mx-12">
          <h2 className="my-2 text-center text-3xl font-bold">
            Gleich Stocha Inspirationen :)
          </h2>
          <SolutionCalculator
            name="Muss es nur erstmal selber machen"
            solutionFunction={({ x, y }) => {
              return x + y;
            }}
          >
            Muss es nur erstmal selber machen. Das ist ein Test für die Lösung
            von <NumberInput name="x" /> + <NumberInput name="y" />.
          </SolutionCalculator>
        </article>
      </div>
    </Main>
  );
};

export default Index;
