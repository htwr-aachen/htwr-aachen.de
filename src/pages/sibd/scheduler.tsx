import { useState } from "react";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

export default function SchedulerPage() {
  const [result, setResult] = useState<string>("");
  const [scheduler, setScheduler] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    fetch("https://api.htwr-aachen.de/dbis-scheduling", {
      body: JSON.stringify({
        content: scheduler,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        setResult(res);
      })
      .catch((_err) => {
        setError("Etwas ist falsch gelaufen :(. Musste wohl selber machen");
      });

    e.preventDefault();
  };

  return (
    <Main
      institute="sibd"
      meta={
        <Meta
          title="Scheduler Recovery Lösen - SIBD@HTWR"
          description="DBIS (Klausur) Scheduler Aufgaben lösen"
        ></Meta>
      }
    >
      <HeadLine>DBIS Scheduler Recovery Aufgaben Lösen</HeadLine>

      <span>
        Natürlich nur für Übungszwecke.{" "}
        <img
          width="128"
          src="https://media.tenor.com/P6GVbSgbRSwAAAAC/winking-wink.gif"
          alt="zwinckender Smiley"
        ></img>
      </span>

      <div className="middle">
        <p>
          Mal angenommen man hätte rein zufällig so eine Aufgabe: s =
          w2(x)r1(z)w3(y)w2(y)r2(z)c2r3(y)r1(x)r3(z)r3(x)w1(x)c1c3 und man
          müsste angeben ob der Scheduler RC,ACA, ST ist? Dann wäre die Lösung
        </p>
        <form className="mt-10 flex w-full" onSubmit={handleSubmit}>
          <input
            name="scheduler"
            type="text"
            className="w-full rounded bg-gray-300 p-2 text-black placeholder:text-black/50"
            placeholder="w2(x)r1(z)w3(y)w2(y)r2(z)c2r3(y)r1(x)r3(z)r3(x)w1(x)c1c3"
            onChange={(e) => {
              setScheduler(e.target.value || "");
            }}
          />
          <button
            type="submit"
            className="ml-2 rounded bg-rwth-warn/75 px-10 hover:bg-rwth-warn"
          >
            Lösen
          </button>
        </form>

        {result && (
          <>
            <h2 className="mt-8 text-2xl underline">Lösung:</h2>
            <p className="mt-8 rounded bg-rwth-accent px-4 py-3 text-white">
              {result}
            </p>
          </>
        )}
        {error && <p className="mt-12 text-red-600">{error}</p>}
      </div>
    </Main>
  );
}
