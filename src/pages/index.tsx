import "katex/dist/katex.min.css";

import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import { InlineMath } from "react-katex";

import {
  Gallery,
  GalleryImage,
  GalleryItem,
  GalleryLabel,
} from "@/components/rwth/gallery";
import {
  NumberInput,
  SolutionCalculator,
  SolutionView,
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
  const fak = (x: number) => {
    let tmp = x;
    for (let i = x - 1; i > 0; i--) {
      tmp *= i;
    }
    return tmp;
  };

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

          <SolutionView
            name="Aufgabe 1.1"
            solution={"Masterstudenten, die nicht Linux nutzen"}
          >
            <InlineMath math="B^c \setminus A_2" />
          </SolutionView>

          <SolutionView
            name="Aufgabe 1.2"
            solution={
              "DeMorgan => Bachelorstudenten, die Linux oder MacOS nutzen"
            }
          >
            <InlineMath math="B \cap (A_2^c \cap A_1)^c" />
          </SolutionView>

          <SolutionView
            name="Aufgabe 2.1"
            solution={
              <InlineMath math="\Omega = \{(w_1, ..., w_x) w_i \in \{1, ..., 365\} für 1 \le i \le x\}"></InlineMath>
            }
          >
            Sei <InlineMath>x</InlineMath> die Anzahl an Studenten im Hörsaal.
          </SolutionView>

          <SolutionCalculator
            name="Aufgabe 3.1"
            solutionFunction={({ fracTop, fracBot, k }) => {
              return ((fracTop * (1 / 2 ** (k - 1))) / fracBot).toFixed(2);
            }}
          >
            Von 1 to <NumberInput name="max" />
            <br />
            Die Formel ist <NumberInput name="fracTop" /> /{" "}
            <NumberInput name="fracBot" /> * 1/2^(k-1)
            <br />
            Für P(B_k) mit k = <NumberInput name="k" />
          </SolutionCalculator>

          <SolutionCalculator
            name="Aufgabe 3.2"
            solutionFunction={({ fracTop, fracBot, x }) => {
              let calc = 0;
              for (let i = 1; i <= x; i++) {
                calc += (fracTop * (1 / 2 ** (i - 1))) / fracBot;
              }
              return calc.toFixed(2);
            }}
          >
            Von 1 to <NumberInput name="max" />
            <br />
            Die Formel ist <NumberInput name="fracTop" /> /{" "}
            <NumberInput name="fracBot" /> * 1/2^(k-1)
            <br />
            Für <InlineMath math="P(\bigcup_{n=1}^x B_n)"></InlineMath> mit x ={" "}
            <NumberInput name="x" />
          </SolutionCalculator>

          <SolutionView
            name="Aufgabe 4.1"
            solution={
              "Falls R oder die leere Menge nicht drin ist => nein, falls wenn [-19, 22), (-unendlich, 19) U [22, unendlich) => ja (mit ähnlichen Zahlen)"
            }
          >
            Guckt selber ist leicht
          </SolutionView>

          <SolutionView
            name="Aufgabe 4.2"
            solution={
              "Ja wenn die vorher richtig war, denn sie sind under Schnitt abgeschlossen"
            }
          >
            Guckt selber ist leicht
          </SolutionView>

          <SolutionView
            name="Aufgabe 5.1"
            solution={
              <InlineMath math="\{w \in \Omega \mid w_i \neq w_j \quad für \quad i,j \in \{1, ..., x\}, i \neq j\}"></InlineMath>
            }
          >
            findet das x selber
          </SolutionView>

          <SolutionCalculator
            name="Aufgabe 5.2 Klausuraufgaben"
            solutionFunction={({ x, y }) => {
              return fak(x) * (fak(y) / fak(y - x));
            }}
          >
            Aus <NumberInput name="total" /> ziehen wir <NumberInput name="y" />{" "}
            mit <NumberInput name="x" /> unterschiedliche
          </SolutionCalculator>

          <SolutionCalculator
            name="Aufgabe 5.3 Klausuraufgaben"
            solutionFunction={({ x, A, total }) => {
              return (A / (fak(total) / fak(x))).toFixed(2);
            }}
          >
            Aus <NumberInput name="total" /> Haben wir <NumberInput name="A" />{" "}
            Ereignisse mit <NumberInput name="x" /> unterschiedliche
          </SolutionCalculator>

          <SolutionCalculator
            name="Aufgabe 5.2 Handys"
            solutionFunction={({ x, zahlen }) => {
              return fak(zahlen + 1) / fak(zahlen + 1 - x);
            }}
          >
            Von 0,...
            <NumberInput name="zahlen" /> ziehen wir <NumberInput name="x" />{" "}
            unterschiedliche
          </SolutionCalculator>

          <SolutionCalculator
            name="Aufgabe 5.3 Handys"
            solutionFunction={({ zahlen, A, x }) => {
              return (A / (zahlen + 1) ** x).toFixed(2);
            }}
          >
            Von 0,...
            <NumberInput name="zahlen" /> haben wir <NumberInput name="A" />{" "}
            Ereignisse indem wir <NumberInput name="x" /> Zahlen ziehen
          </SolutionCalculator>
        </article>
      </div>
    </Main>
  );
};

export default Index;
