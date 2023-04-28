import Image from "next/image";
import type { FC } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/rwth/Main";

const MoodleAnleitung: FC = () => {
  return (
    <Main
      meta={
        <Meta
          title="Moodle Anleitung - HTWR Aachen"
          description="HTWR Aachen ist hier die wahre Exzellenzuniversität. Wir helfen wo der Doppelgänger versagt... zum Beispiel bei Moodle Mobile... "
        ></Meta>
      }
      instituteName="MAIN"
      instituteTitle=""
    >
      <HeadLine>Moodle Anleitung</HeadLine>
      <p className="text-lg">
        Moodle ist doch toll und das neue Update ist auch so schön wow.
        <br />
        Und es ist auch so
        <br />
        <img src="https://media.tenor.com/zecVkmevzcIAAAAC/please-wait.gif"></img>
        <h2 className="text-xl">
          Aber hier noch ein wichtiger Tipp für die Leute die Moodle auch auf
          dem Handy nutzen wollen also alle irgendwann mal... <br /> Die RWTH in
          3 Bildern erklärt.
        </h2>
        <div className="mx-12 mt-8 grid grid-cols-1 grid-rows-3 items-center justify-center text-center lg:mx-0 lg:grid-cols-3 lg:grid-rows-1 lg:items-start">
          <div>
            <Image
              alt="Moodle Kursliste"
              className="mx-auto"
              src={"/other/moodle-anleitung/Kursliste.jpg"}
              width="300"
              height="648"
            ></Image>
            <p className="my-4 text-lg">
              Ach ja so jetzt möchte ich mal gucken ob Malo schon wieder neue
              Etests gibt
            </p>
          </div>
          <div>
            <Image
              alt="Verclickt"
              className="mx-auto"
              src={"/other/moodle-anleitung/DBIS.jpg"}
              width="300"
              height="648"
            ></Image>
            <p className="my-4 text-lg">
              Misst jetzt hab ich mich verklickt nach 5h warten ist es geladen
              wo kann ich denn jetzt zurück?
            </p>
          </div>
          <div>
            <Image
              alt="Verclickt"
              className="mx-auto"
              src={"/other/moodle-anleitung/WTF.jpg"}
              width="300"
              height="648"
            ></Image>
            <p className="my-4 text-lg">
              Ahh warte es ist ja RWTH Moodle ich muss einfach nur den
              unsichtbaren Button oben rechts drücken ganz simple und intuitiv
            </p>
          </div>
        </div>
        <p className="text-lg"></p>
      </p>
    </Main>
  );
};
export default MoodleAnleitung;
