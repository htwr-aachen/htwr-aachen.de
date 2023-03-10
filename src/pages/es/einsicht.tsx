import type { FC } from "react";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/es/Main";

const Einsicht: FC = () => {
  return (
    <Main
      meta={<Meta title="ES@HTWR" description="Engineering Software"></Meta>}
    >
      <h1 className="text-5xl font-light">Softwaretechnik Einsicht</h1>

      <h1 className="my-4 rounded bg-gray-200 px-3 py-2">
        Das ist mit Abstand die schlechteste Einsicht die ich je gesehen habe.
      </h1>

      <p className="py-2">
        Für alle, die gerne eine Kopie ihrer Klausur haben wollten, denen dies
        aber in der Einsicht verwehrt wurde gibt es{" "}
        <a
          target="_blank"
          href="mailto:mpfeiffer@se-rwth.de?subject=Kopie%20meiner%20SWT%20Klausur&body=Sehr%20geehrter%20Herr%20Pfeiffer%2C%0D%0A%0D%0Aam%2008.03.2023%20habe%20ich%20an%20der%20Einsicht%20zu%20der%20Klausur%20Softwaretechnik%20teilgenommen.%20Dort%20wurde%20mir%20verweigert%20eine%20Kopie%20meiner%20Klausur%20inklusive%20der%20Aufgabenstellung%20anzufertigen.%20Laut%20%C3%9Cbergreifender%20Pr%C3%BCfungsordnung%20%C2%A722%20Absatz%203%20habe%20ich%20aber%20ein%20Recht%20auf%20diese.%20Darum%20bitte%20ich%20Sie%20mir%20nun%20eine%20solche%20Kopie%20meiner%20Klausur%20zuzusenden.%0D%0A%0D%0A%7BName%7D%20-%20%7BMatrikelnummer%7D"
        >
          hier
        </a>{" "}
        eine Email Template. Da muss man nur seinen Namen und Matrikelnummer
        einfügen.
      </p>

      <p className="py-2">
        Alternativ kann man sich den Text auch hier kopieren:
      </p>

      <p className="my-4 rounded bg-gray-200 px-3 py-2">
        Sehr geehrter Herr Pfeiffer,<br></br>
        <br></br>
        am 08.03.2023 habe ich an der Einsicht zu der Klausur Softwaretechnik
        teilgenommen. Dort wurde mir verweigert eine Kopie meiner Klausur
        inklusive der Aufgabenstellung anzufertigen. Laut Übergreifender
        Prüfungsordnung §22 Absatz 3 habe ich aber ein Recht auf diese. Darum
        bitte ich Sie mir nun eine solche Kopie meiner Klausur zuzusenden.
        <br></br>
        <br></br>
        Name - Matrikelnummer
      </p>

      <h1 className="my-4 rounded bg-gray-200 px-3 py-2">
        Die einzige Email-Adresse, die ich finden konnte ist diese:
        <a target={"_blank"} href="mailto:mpfeiffer@se-rwth.de">
          mpfeiffer@se-rwth.de
        </a>
      </h1>
    </Main>
  );
};

export default Einsicht;
