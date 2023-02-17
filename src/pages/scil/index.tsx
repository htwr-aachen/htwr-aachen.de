import Image from "next/image";
import type { FC } from "react";

import { Gallery, GalleryLabel } from "@/components/rwth/gallery";
import { HeadLine } from "@/components/rwth/headline";
import {
  Schnellzugriff,
  Schnellzugrifflink,
} from "@/components/rwth/schnellzugriff";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/scil/Main";

const SCIL: FC = () => {
  return (
    <Main meta={<Meta title="SCIL@HTWR"></Meta>}>
      <HeadLine>Vorbereitung für BUK</HeadLine>

      <Gallery>
        <div className="relative">
          <Image
            src={"/assets/scil/banner.png"}
            alt="SCIL Banner"
            className="block h-auto max-h-[500px] w-auto object-contain"
            width={700}
            height={500}
          ></Image>
          <GalleryLabel headline="Aktuelle Forschung" url="/scil/studium">
            Jetzt wird gebukked
          </GalleryLabel>
        </div>
        <div className="relative">
          <Image
            src={"/assets/scil/martina_grohe.jpg"}
            alt="Martina Grohe"
            className="block h-auto max-h-[500px] w-auto object-contain"
            width={300}
            height={500}
          ></Image>
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
        <div>
          <Image
            src={"/assets/scil/martina_grohe.jpg"}
            width={400}
            height={800}
            alt="Martina Grohe"
            className="mx-auto"
          ></Image>
          <h2 className="text-center font-sans text-xl font-bold">
            Martina Grohe xd
          </h2>
        </div>
        <Schnellzugriff title={"Schnellzugriff"}>
          <Schnellzugrifflink href="/scil/studium">Studium</Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/studium/klausuren" sub>
            Klausuren
          </Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/studium/teachings" sub>
            Zusammenfassungen
          </Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/studium/aufgaben" sub>
            Aufgaben
          </Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/studium/fragen" sub>
            Fragen (bald)
          </Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/forschung">
            Forschung
          </Schnellzugrifflink>
          <Schnellzugrifflink href="/scil/lehrstuhl">
            Lehrstuhl
          </Schnellzugrifflink>
        </Schnellzugriff>
      </div>
    </Main>
  );
};

export default SCIL;
