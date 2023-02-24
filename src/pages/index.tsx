import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";

import { Gallery, GalleryLabel } from "@/components/rwth/gallery";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/rwth/Main";

type PersonaElementProps = {
  children: ReactNode;
  href: string;
};
const PersonaElement: FC<PersonaElementProps> = ({ children, href }) => {
  return (
    <li className="h-full">
      <Link
        className="flex h-full items-center justify-center px-5 text-black hover:border-b-0 hover:bg-white/75"
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
    <ul className="flex h-[115px] items-center justify-center bg-rwth-warn">
      {children}
    </ul>
  );
};

const Index: FC = () => {
  return (
    <Main
      meta={
        <Meta
          title="HTWR Aachhen"
          description="HTWR Aachen ist die beste Hilfe für seinen Doppelgänger"
        ></Meta>
      }
      instituteName="SCIL"
      instituteTitle="Lehrstuhl für 7 Informatik (Theorie und Logik Systeme diskreter)"
      pad
    >
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
      <div>
        <Persona>
          <PersonaElement href="/scil">SCIL / BuK</PersonaElement>
          <PersonaElement href="/es">ES / SWT</PersonaElement>
          <PersonaElement href="/syscom">SysCom / DatKom</PersonaElement>
        </Persona>
      </div>
    </Main>
  );
};

export default Index;
