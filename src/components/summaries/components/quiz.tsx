"use client";

import React, { useEffect, useState } from "react";

export type Zitat = {
  text: string;
  isTrue: boolean;
};

export default function ZitateQuiz({
  profName,
  zitatList,
  zitat,
}: {
  zitat?: Zitat;
  profName: string;
  zitatList: Zitat[];
}) {
  const [resolved, setResolved] = useState<boolean | null>(null);
  const [internalZitat, setInternalZitat] = useState<Zitat | null>(
    zitat || null
  );

  let deepCopy: Zitat[] = [];

  // shuffle using Fisher-Yates
  function shuffleQuotes() {
    let i = deepCopy.length;
    let randI: number;
    while (i !== 0) {
      randI = Math.floor(Math.random() * i);
      i--;
      [deepCopy[i], deepCopy[randI]] = [deepCopy[randI], deepCopy[i]];
    }
    return deepCopy;
  }

  const reset = () => {
    if (deepCopy.length === 0) {
      deepCopy = [...zitatList];
      shuffleQuotes();
    }
    const nextZitat = deepCopy.pop();
    setInternalZitat(nextZitat || null);
    setResolved(null);
  };

  useEffect(() => {
    if (zitat) return;
    reset();
  }, [zitat]);

  return (
    <div className="relative my-4 grid grid-rows-3 rounded-2xl bg-linear-to-tl from-black to-blue-900 px-4 py-2 text-white lg:px-10 lg:pt-8">
      <div className="flex items-center justify-center text-center">
        <span className="mr-4 text-4xl">?</span>
        <span className="mr-4 align-middle">
          {profName} Zitate Quiz: Ist es ein {profName} Zitat oder nicht
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
            <span className="block text-center text-lg">
              {internalZitat?.isTrue === resolved
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
}
