"use client";

import { useState } from "react";
import styles from "./bingo.module.css";

type Bingo = {
  id: string;
  name: string;
  words: string[];
};

// You can add subjects here. Just have at least size * size (normally 16) words :)
const bingos: Bingo[] = [
  {
    id: "swt",
    name: "SWT",
    words: [
      "BMW",
      "VW",
      "Unternehmen",
      "RWTH",
      "Software",
      "Kosten",
      "Engineering",
      "Arbeit",
      "Forschung",
      "Kooperation",
      "Apple",
      "Informatik",
      "Wirtschaft",
      "Klausur",
      "Produkt",
      "Fehler",
      "Fahrzeug",
      "Qualität",
      "Programmieren",
      "Analyse",
      "Entwurf",
      "Implementierung",
      "Test",
      "Deployment",
      "Evolution",
      "Modell",
      "Integration",
      "Wartung",
      "Wasserfall",
      "Phase",
      "Scrum",
      "Agil",
      "Definition",
      "Anforderung",
      "Kommunikation",
      "Standard",
      "Diagramm",
      "Prozess",
      "Geschäft",
      "Aktivität",
      "Aktion",
      "Kunde",
      "System",
      "Use-Case",
      "Akteur",
      "Prototyp",
      "Methode",
      "Klasse",
      "Beziehung",
      "Management",
      "Objekt",
      "Pfeil",
      "Ereignis",
      "Rolle",
      "Problem",
      "Lösung",
      "Beispiel",
      "Muster",
      "Nutzer",
      "Zukunft",
      "Java",
      "Projekt",
      "Cloud",
    ],
  },
  {
    id: "progra",
    name: "Progra",
    words: [
      "Haskell",
      "Java",
      "Prolog",
      "Succ Nats",
      "Grammatik",
      "Syntax",
      "Programm",
      "Methode",
      "String",
      "Ausdruck",
      "Anweisung",
      "Datentyp",
      "Schleife",
      "if",
      "switch",
      "while",
      "do",
      "for",
      "main",
      "Bedingung",
      "Verifikation",
      "Hoare-Kalkül",
      "Regel",
      "terminiert",
      "foreach",
      "Objekt",
      "Klasse",
      "Deklaration",
      "objektorientiert",
      "break",
      "continue",
      "return",
      "Parameter",
      "private",
      "public",
      "Konstruktor",
      "Integer",
      "int",
      "float",
      "double",
      "char",
      "Liste",
      "Array",
      "Klausur",
      "Beispiel",
    ],
  },
];

export default function Bingo() {
  const [subject, setSubject] = useState<string | null>(null);
  const [size, setSize] = useState<number>(3);

  const totalCells = size * size;
  const [gridValues, setGridValues] = useState<boolean[]>(
    Array(totalCells).fill(false),
  );
  const [gridText, setGridText] = useState<string[]>(
    Array(totalCells).fill(""),
  );

  const handleClick = (index: number) => {
    const newValues = [...gridValues];
    newValues[index] = !newValues[index];
    setGridValues(newValues);
  };

  const gridStyle = {
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
  };

  const calculateWords = (newSize: number, newSubject: string | null) => {
    const newTotalCells = newSize * newSize;
    setGridValues(Array(newTotalCells).fill(false));

    const collection = bingos.find((b) => b.id === newSubject)?.words;

    if (collection) {
      // Shuffle the collection using Fisher-Yates algorithm
      const shuffledCollection = [...collection];
      for (let i = shuffledCollection.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCollection[i], shuffledCollection[j]] = [
          shuffledCollection[j],
          shuffledCollection[i],
        ];
      }

      // Take the first `totalCells` elements, ensuring no duplicates
      const newGrid = shuffledCollection.slice(0, newTotalCells);

      setGridText(newGrid);
    }
  };

  const currentName = bingos.find((b) => b.id === subject)?.name;

  return subject == null ? (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {bingos.map((bingo) => (
          <button
            key={bingo.id}
            onClick={() => {
              setSubject(bingo.id);
              calculateWords(size, bingo.id);
            }}
            className="text-muted-foreground"
          >
            <div className="bg-muted text-muted-foreground cursor-pointer rounded-lg px-6 py-4 text-lg">
              <h2 className="text-foreground text-xl font-medium">
                {bingo.name}
              </h2>
            </div>
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex justify-center p-2">
      <div>
        <h1 className="mb-2 text-center text-xl font-bold">{currentName}</h1>
        <div className={styles.wrapper}>
          <div className={styles.field} style={gridStyle}>
            {gridValues.map((_, index) => (
              <button
                key={index}
                className={`${styles.tile} ${
                  gridValues[index] ? "bg-blue-500" : "bg-stone-800"
                }`}
                onClick={() => handleClick(index)}
              >
                {gridText[index]}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <button
            className="bg-muted text-muted-foreground cursor-pointer rounded-lg px-6 py-4 text-lg"
            onClick={() => {
              setSubject(null);
            }}
          >
            <h2 className="text-foreground">Zurück</h2>
          </button>
          <button
            className="bg-muted text-muted-foreground cursor-pointer rounded-lg px-6 py-4 text-lg"
            onClick={() => {
              let newSize = 2;
              if (size < 5) {
                newSize = size + 1;
              }
              setSize(newSize);
              calculateWords(newSize, subject);
            }}
          >
            <h2 className="text-foreground">
              {size}x{size}
            </h2>
          </button>

          <button
            className="bg-muted text-muted-foreground cursor-pointer rounded-lg px-6 py-4 text-lg"
            onClick={() => {
              calculateWords(size, subject);
            }}
          >
            <h2 className="text-foreground">Neue Worte</h2>
          </button>
        </div>
      </div>
    </div>
  );
}
