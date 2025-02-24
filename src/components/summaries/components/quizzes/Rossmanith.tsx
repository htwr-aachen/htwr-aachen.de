"use client";

import type { Zitat } from "../quiz";
import ZitateQuiz from "../quiz";

// bald aus csv laden
const Zitate: Zitat[] = [
  {
    text: "Die Folien auf Moodle hochzuladen, das ist für mich ein traumatisches Ergebnis.",
    isTrue: true,
  },
  {
    text: "WAS? Die Musterlösungen sind nicht auf Moodle? Das ist gegen meinen Willen!",
    isTrue: true,
  },
  {
    text: "Manchmal stelle ich mich aus pädagogischen Gründen absichtlich dumm.",
    isTrue: true,
  },
  {
    text: "Die Frage: Ist das Studium sinnvoll?",
    isTrue: true,
  },
  {
    text: "Den Printentest gibts wirklich, das ist kein scam oder so.",
    isTrue: true,
  },
  {
    text: "Ich hoffe ihr habt das gelernt. Das ist heute irgendwie nicht mehr in Mode, was ich unfassbar traurig finde.",
    isTrue: true,
  },
  {
    text: "Ich finde das sehr traurig. Das ist nicht nett.",
    isTrue: true,
  },
  {
    text: "Zu jedem Zeitpunkt sollte genau eine Funktion wahr sein. Nicht zwei, nicht eine, sondern zwei.",
    isTrue: true,
  },
  {
    text: "Das wurde vor kurzem gelöst... das war vor 20 Jahren oder so aber für mich ist das wie gestern.",
    isTrue: true,
  },
  {
    text: "Wir können das so machen, ich male hier ein Dreieck, und was heißt das? Keine Ahnung.",
    isTrue: true,
  },
  {
    text: "Eine Funktion ist eine Funktion.",
    isTrue: true,
  },
  {
    text: "Das war das allererste, was sie uns in Analysis erstmal beigebracht haben. Dass wir dumm sind und, ähhh, und dass man uns erstmal brechen muss, und neu aufbauen. Mit lauter solchen bösartigen logischen Spielen, ja.",
    isTrue: true,
  },
  {
    text: "Wenn man jetzt irgendwie radikal wäre, könnte man sonne neue Religion Satologie oder sowas gründen.",
    isTrue: true,
  },
  {
    text: "SAT ist irgendwie die Krönung der Schöpfung, und wir bauen gute Sat-solver, die ehren und beten wir an, okay?",
    isTrue: true,
  },
];

export default function RossmanithQuiz() {
  return <ZitateQuiz profName="Rossmanith" zitatList={Zitate}></ZitateQuiz>;
}
