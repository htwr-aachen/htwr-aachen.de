import {
  Binary,
  Code,
  GitPullRequest,
  NotebookText,
  PencilRuler,
  PenLine,
  SpellCheck,
} from "lucide-react";

import { BentoGrid, BentoGridLink } from "@/components/ui/bento";

import {
  BackendIcon,
  CustomAnim,
  ExamAnim,
  GuidesIcon,
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
          title="Frontend Dokumentation"
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
        <BentoGridLink
          href="/docs/backend"
          title="Backend Dokumentation"
          description="Ist nicht viel, kann aber noch werden"
          className="[&>p:text-lg]"
          icon={<Binary></Binary>}
          header={<BackendIcon></BackendIcon>}
        />
        <BentoGridLink
          href="/docs/guides"
          title="Guides für common tasks"
          description="Alles ist fürs leichte Bearbeiten gemacht"
          className="[&>p:text-lg] md:col-span-2"
          icon={<GitPullRequest></GitPullRequest>}
          header={<GuidesIcon></GuidesIcon>}
        />
      </BentoGrid>
    </div>
  );
}
