import {
  Code,
  NotebookText,
  PencilRuler,
  PenLine,
  SpellCheck,
} from "lucide-react";

import { BentoGrid, BentoGridLink } from "@/components/ui/bento";

import {
  CustomAnim,
  ExamAnim,
  PanikzettelAnim,
  TeachingAnim,
  TypoAnim,
} from "./local-icons";

export default function Page() {
  return (
    <div className="items-center justify-center">
      <h1 className="text-center text-3xl font-bold drop-shadow-glow md:py-48 md:text-8xl">
        Willkommen zu den HTWR/docs
      </h1>
      {
        // <BentoGridThirdDemo></BentoGridThirdDemo>
      }

      <BentoGrid className="mx-auto mb-8 max-w-5xl md:auto-rows-[20rem]">
        <BentoGridLink
          href="/docs/exams"
          title="Prüfungsprotokol erstellen"
          description="Sei ein Sigma und helfe anderen, wie auch Löwen und Wölfe untereinander helfen."
          icon={<NotebookText></NotebookText>}
          className="[&>p:text-lg]"
          header=<ExamAnim></ExamAnim>
        ></BentoGridLink>
        <BentoGridLink
          href="/docs/typos"
          title="Fehler finden/fixen"
          description="Danke"
          icon={<SpellCheck></SpellCheck>}
          className="[&>p:text-lg]"
          header=<TypoAnim></TypoAnim>
        ></BentoGridLink>
        <BentoGridLink
          href="/docs/summary"
          title="Zusammenfassungen schreiben"
          description="Wiederkäuen ist eigentlich einfach und braucht nur ein bisschen Kreativität.."
          icon={<PenLine></PenLine>}
          className="[&>p:text-lg]"
          header=<TeachingAnim></TeachingAnim>
        ></BentoGridLink>
        <BentoGridLink
          href="/docs/frontend"
          title="Eigenes Zeugs kreieren"
          description="Du kannst React/Nextjs und hast irgendeine ... wirklich irgendeine Idee? Motto: Jeder darf alles!"
          className="[&>p:text-lg] md:col-span-2"
          icon={<Code></Code>}
          header={<CustomAnim></CustomAnim>}
        />
        <BentoGridLink
          href="/docs/panikzettel"
          title="Panikzettel schreiben/aktualisieren"
          description="Neue Datkom Inhalte dropped? => Panikzettel updaten"
          className="[&>p:text-lg]"
          icon={<PencilRuler></PencilRuler>}
          header={<PanikzettelAnim></PanikzettelAnim>}
        />
      </BentoGrid>
    </div>
  );
}
