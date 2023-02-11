import type { FC } from "react";
import React, { useEffect, useState } from "react";

type Zitat = {
  text: string;
  rumpe: boolean;
};

// bald aus csv laden
const Zitate: Zitat[] = [
  {
    text: "Habe ich schon mal erzählt, dass ich gute Verbindungen in die Bayrischen Steuerämter habe",
    rumpe: true,
  },
  { text: "Ich glaube das ist falsch", rumpe: false },
  { text: "Ich glaube das ist richtig", rumpe: true },
  { text: "Eine promotion lohnt sich immer", rumpe: false },
  {
    text: "Darf ich sie nochmal dran erinnern, mir Fragen zu stellen",
    rumpe: true,
  },
  { text: "Benutzen sie nicht Javascript", rumpe: true },
  { text: "Dann wünsch ich ihnen Zuhörern allen ein Hallo", rumpe: true },
  {
    text: "wenn man nur den bachelor hat hat man dokumentiert, dass man den master nicht hat",
    rumpe: true,
  },
  {
    text: "Unteranderem auch die bayrische Steuerverwaltung zu denen ich sehr gute Kontakte habe",
    rumpe: true,
  },
  { text: "Habe ich schonmal erwähnt...?", rumpe: true },
  { text: "Ich will keine Werbung machen, aber...", rumpe: true },
  { text: "Ein ehemaliger Student von mir...", rumpe: true },
  { text: "Ich kann hacken. Ich weiß, wie das geht.", rumpe: true },
  { text: "Von der Physik bis zur Physik", rumpe: true },
  {
    text: "Ich habe ein Bild bei mir von nem Clown, der einen Clown malt",
    rumpe: true,
  },
  { text: "For exam... äh, Beispiel", rumpe: true },
  {
    text: "Ich weiß nicht, ob ich das Ihnen schon einmal erzählt habe [...]",
    rumpe: true,
  },
  { text: "Ich bin Bayer, ich kenne mich mit sowas aus", rumpe: true },
  {
    text: "und damit höre ich jetzt auch auf werbung zu machen... also ich brauch ja keine werbung zu machen...",
    rumpe: true,
  },
  { text: "Haben Sie schonmal vom Porsche Stipendium gehört?", rumpe: false },
  { text: "Ich liebe C++", rumpe: false },
  {
    text: "Heute muss ich mich etwas beeilen, denn wir haben viel vor",
    rumpe: false,
  },
  {
    text: "Wer unter ihnen hat den schonmal Brainfuck verwendet?",
    rumpe: false,
  },
  {
    text: "Studieren sie lieber nicht, sondern machen sie möglichst viel praktisches für mehr Geld.",
    rumpe: false,
  },
  {
    text: "Wenn sie einen Scheißprozess digitalisieren, dann haben sie einen scheiß digitalen Prozess.",
    rumpe: true,
  },
];

let randomQuotes: Zitat[] = [];

type RumpeQuizProps = {
  zitat?: Zitat;
};

const RumpeQuiz: FC<RumpeQuizProps> = ({ zitat }) => {
  const [resolved, setResolved] = useState<boolean | null>(null);
  const [internalZitat, setInternalZitat] = useState<Zitat | null>(
    zitat || null
  );

  // shuffle using Fisher-Yates
  function shuffleQuotes() {
    let i = randomQuotes.length;
    let randI: number;
    while (i !== 0) {
      randI = Math.floor(Math.random() * i);
      i--;
      [randomQuotes[i], randomQuotes[randI]] = [
        randomQuotes[randI],
        randomQuotes[i],
      ];
    }
    return randomQuotes;
  }

  const reset = () => {
    if (randomQuotes.length === 0) {
      randomQuotes = Zitate;
      shuffleQuotes();
    }
    const nextZitat = randomQuotes.pop();
    setInternalZitat(nextZitat || null);
    setResolved(null);
  };

  useEffect(() => {
    if (zitat) return;
    reset();
  }, [zitat]);

  return (
    <div className="relative my-4 grid grid-rows-3 rounded-2xl bg-gradient-to-tl from-black to-blue-900 px-4 py-2 text-white lg:px-10 lg:pt-8">
      <div className="flex items-center justify-center text-center">
        <span className="mr-4 text-4xl">?</span>
        <span className="mr-4 align-middle">
          Rumpe Zitate Quiz: Ist es ein Rumpe Zitat oder nicht
        </span>
        <span className="text-4xl">?</span>
      </div>
      <div className="text-center text-2xl">
        "{internalZitat?.text}"<hr className="mt-2 bg-none opacity-40"></hr>
      </div>
      <div className="grid w-full items-center">
        {resolved === null ? (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setResolved(true)}
              className="rounded-lg bg-green-600 py-2 transition-colors hover:bg-green-700"
            >
              Ja
            </button>
            <button
              onClick={() => setResolved(false)}
              className="rounded-lg bg-red-600 py-2 transition-colors hover:bg-red-700"
            >
              Nein
            </button>
          </div>
        ) : (
          <>
            <span className="block text-center font-roboto text-lg">
              {internalZitat?.rumpe === resolved
                ? "Gut erkannt"
                : "Leider falsch"}
            </span>
            <button
              onClick={() => reset()}
              className="absolute right-4 rounded-md  bg-blue-900 px-2 py-1 transition-colors hover:bg-black lg:bottom-2"
            >
              Nochmal :D
            </button>
          </>
        )}
      </div>
      <span className="pointer-events-none my-2 opacity-25 lg:my-4">
        *eventuell sind ein paar Zitate frei erfunden. Sendet mir mehr:{" "}
        <a href="mailto:jonas.max.schneider" className="text-white">
          jonas.max.schneider@gmail.com
        </a>
      </span>
    </div>
  );
};

export default RumpeQuiz;
