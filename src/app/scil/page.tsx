import Image from "next/image";
import type { FC } from "react";

import { Gallery, GalleryLabel } from "@/components/rwth/gallery";
import { HeadLine } from "@/components/rwth/headline";

import { SCILSchnellzugriff } from "./schnellzugriff";

const SCIL: FC = () => {
  return (
    <div>
      <HeadLine>
        Viel Glück an die BuK Zweitschreiber. Es wird <b>gottlos</b>
      </HeadLine>

      <Gallery>
        <div className="relative">
          <img
            src="https://media.tenor.com/gdOx-XoiPtwAAAAd/when-your-bored-of-maths-maths-op.gif"
            alt="Good Luck"
            className="block h-auto max-h-[500px] w-auto object-contain"
            width={700}
            height={500}
          />
          <GalleryLabel headline="Viel Erfolg" url="/scil/studium">
            Viel Glück euch, Reduziert eure Erwartungen...
          </GalleryLabel>
        </div>
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
          <h2 className="mb-4 px-4 text-center font-sans text-xl font-bold">
            POV: Prof. Grohe, Kobbelt und Wehrle während der BuK Klausur...
          </h2>
          <Image
            src={"/assets/scil/skiing.jpg"}
            width={600}
            height={1080}
            alt="Martina Grohe beim Skifahren"
            className="mx-auto"
          ></Image>
        </div>
        <SCILSchnellzugriff />
      </div>
      <div>
        <h2 className="my-6 px-4 text-center font-sans text-xl font-bold">
          POV: Prof. Grohe während er die Hälfte des Semesters exmatrikuliert...
        </h2>
        <Image
          src={"/assets/scil/idoubtit.jpeg"}
          width={600}
          height={1080}
          alt="Martina Grohe beim exmatrikulieren"
          className="mx-auto"
        ></Image>
      </div>
    </div>
  );
};

export default SCIL;
