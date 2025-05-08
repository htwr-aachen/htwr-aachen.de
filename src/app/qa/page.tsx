import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";
import { NewQuestionForm } from "./new-question";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import QASearch from "./search";
import { QAQuestion } from "@/models/qa";
import QAQuestionEntry from "@/components/qa/question-entry";

const TestUnansweredQuestion: QAQuestion = {
  id: 1,
  title:
    "Was geht den hier ab? Was passiert wenn dieser titel doch etwas länger wird",
  description:
    "Ein bisschen Markdown ist auch erlaubt<br/><ul><li>das muss ich probieren</li></ul>wow",
  createdAt: new Date(),
};
const TestAnsweredQuestion: QAQuestion = {
  id: 2,
  title:
    "Was geht den hier ab? Was passiert wenn dieser titel doch etwas länger wird",
  description:
    "<h1>ist auch gestattet?</h1><br/><ul><li>das muss ich probieren</li></ul>wow",
  createdAt: new Date(),
  answer: {
    id: 2,
    answer:
      "<h1>ist auch gestattet?</h1><br/><ul><li>das muss ich probieren</li></ul>wow",
    createdAt: new Date(),
    known_since: new Date(),
  },
};

export default async function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-prose px-4 lg:px-0">
      <h1 className="my-6 scroll-m-20 font-sans text-4xl font-bold lg:text-5xl">
        HTWR-Q&amp;A
      </h1>
      <p className="my-6 leading-7">
        Hast du fragen über dein Informatikstudium? Kann dir Niemand helfen und
        das ZPA ghostet dich bereits <a href="#footnote-1">[1]</a>?
        <br />
        Ich habe/hatte das gleiche Problem also warum nicht einander helfen?
        Hier können ganz einfach, ohne Einlogen oder sonstigem Quatsch, neue
        Fragen gestellt und Antworten eingereicht werden.
      </p>
      <Alert className="my-4">
        <TriangleAlert className="size-4" />
        <AlertTitle>Kein Freifahrtschein</AlertTitle>
        <AlertDescription>
          Das heißt nicht das Fragen und Antworten sofort für Jederman sichtbar
          seien werden. Sie unterlaufen trotzdem eine Inspektion.
        </AlertDescription>
      </Alert>

      <div className="my-4">
        <Drawer repositionInputs={false}>
          <DrawerTrigger asChild>
            <Button className="w-full cursor-pointer">
              Neue Frage stellen
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto mb-8 w-full max-w-lg px-4 lg:px-0">
              <DrawerHeader className="w-full px-0 py-8">
                <DrawerTitle className="text-lg">
                  Neue Frage stellen
                </DrawerTitle>
                <DrawerDescription>
                  Bitte stelle sicher, das sich diese oder eine ähnliche Frage
                  noch nicht im Sortiment befindet.
                </DrawerDescription>
              </DrawerHeader>
              <NewQuestionForm />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <QASearch />

      <div className="my-8">
        <h2 id="unanswered" className="text-2xl font-bold">
          Unbeantwortete Fragen
        </h2>
        <QAQuestionEntry question={TestUnansweredQuestion} />
      </div>

      <div className="my-8">
        <h2 id="answered" className="text-2xl font-bold">
          Beantwortete Fragen
        </h2>
        <QAQuestionEntry question={TestAnsweredQuestion} />
      </div>

      <p id="footnote-1" className="italic">
        [1] Okay ja das ZPA antwortet in der Regel ziemlich schnell und
        zuverlässig
      </p>
    </div>
  );
}
