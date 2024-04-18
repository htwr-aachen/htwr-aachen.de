"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Prism from "prismjs";
import type { FC } from "react";
import { Suspense, useEffect, useState } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { Main } from "@/layouts/rwth/Main";

import styles from "./botmein.module.scss";

const IntroQuery = "intro";
const AutomaticQuery = "automatic";
const TutorialQuery = "tutorial";

type PageProps = {
  page: string;
  setPage: (page: string) => void;
};

const TutorialPage: FC<PageProps> = (props) => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  });

  return (
    <div className={styles.tutorial}>
      <button
        onClick={() => {
          props.setPage(IntroQuery);
        }}
        className="absolute left-1 top-1 rounded bg-gray-200 px-2 py-1 transition-transform hover:scale-105"
      >
        Zurück
      </button>
      <h1>DIY Tutorial (kommt bald) [Hoffentlich]</h1>
      <section>
        <h3>Anforderungen</h3>
        <ul>
          <li>Python 3.xx</li>
          <li>Das wars auch schon :)</li>
        </ul>
      </section>
      <section>
        <h3>Downloads</h3>
        <ul>
          <li>
            Bester Weg{" "}
            <a href="https://github.com/jonsch318/htwr-aachen.de/tree/bot/projects/botmein">
              repo.
            </a>{" "}
            (Momentan noch unter bot branch)
          </li>
          <li>
            Ich plane irregular releases mit ci/cd zu machen dauert aber noch
            was.
          </li>
        </ul>
      </section>
      <section>
        <h3>How to</h3>
        <ul>
          <li>
            Ausführen mit
            <pre className="lang-bash">
              <code className="lang-bash code-highlight">py cli.py</code>
            </pre>
            bzw.
            <pre>
              <code className="lang-bash code-highlight">
                py projects/botmein/cli.py
              </code>
            </pre>
          </li>
          <li>
            Du wirst nun durch den Prozess geleitet um eine Anmeldung
            durchzuführen.
          </li>
          <li>
            Falls du dir eine automatische lokale Anmeldung wünschst, wird dir
            die CLI dafür commands geben, bzw. sich installieren lassen.
          </li>
        </ul>
      </section>
    </div>
  );
};

const AutomatPage: FC<PageProps> = (props) => {
  return (
    <div className={styles.automatic}>
      <button
        onClick={() => {
          props.setPage(IntroQuery);
        }}
        className="absolute left-1 top-1 rounded bg-gray-200 px-2 py-1 transition-transform hover:scale-105"
      >
        Zurück
      </button>
      <h1>Automatische Anmeldung (kommt später)</h1>
    </div>
  );
};

const IntroPage: FC<PageProps> = (props) => {
  return (
    <div className={styles.cont}>
      <button
        onClick={() => {
          props.setPage(AutomaticQuery);
        }}
        type="button"
        className={styles.subCont}
      >
        <h3>Vollautomatische Anmeldung</h3>
        <hr></hr>
        <ul>
          <li>Einfach</li>
          <li>Schnell</li>
          <li>⚠️ Du vertraust mir deine Daten bzw. Email und Passwort an ⚠️</li>
        </ul>
        <div className="absolute inset-x-0 bottom-5 flex w-full items-center justify-center">
          <span className={styles.btn}>
            Weiter mit der Automatischen Anmeldung
          </span>
        </div>
      </button>
      <button
        onClick={() => {
          props.setPage(TutorialQuery);
        }}
        type="button"
        className={styles.subCont}
      >
        <div className="mb-auto">
          <h3>DIY Script Tutorial</h3>
          <hr></hr>
          <ul>
            <li>Prüfbar Sicher</li>
            <li>Customisierbar</li>
            <li>CLI = SPAß</li>
          </ul>
        </div>
        <div className="absolute inset-x-0 bottom-5 flex w-full items-center justify-center">
          <span className={styles.btn}>
            Gib mir nen ein Tutorial wie ich es selber mache
          </span>
        </div>
      </button>
    </div>
  );
};

function BotMeInPageRouter() {
  const router = useRouter();
  const query = useSearchParams()?.get("page") || "";
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    if (
      ![IntroQuery, AutomaticQuery, TutorialQuery].includes(query as string)
    ) {
      setPage(IntroQuery);
    } else {
      setPage(query as string);
    }
  }, [query]);

  const setNewPage = (pg: string) => {
    router.push(`/botmein?page=${pg}`);
    setPage(pg);
  };

  return (
    <Main institute="htwr">
      <HeadLine>
        BotMeIn{" "}
        <span className="text-center text-2xl">
          Der HSZ Bot, auf den alle Informatiker gewartet haben
        </span>
      </HeadLine>
      {page === IntroQuery && <IntroPage page={page} setPage={setNewPage} />}
      {page === AutomaticQuery && (
        <AutomatPage page={page} setPage={setNewPage} />
      )}
      {page === TutorialQuery && (
        <TutorialPage page={page} setPage={setNewPage} />
      )}
    </Main>
  );
}

export default function BotMeInPage() {
  return (
    <Main institute="htwr">
      <HeadLine>
        BotMeIn{" "}
        <span className="text-center text-2xl">
          Der HSZ Bot, auf den alle Informatiker gewartet haben
        </span>
      </HeadLine>
      <Suspense
        fallback={<span className="text-center text-2xl">Loading...</span>}
      >
        <BotMeInPageRouter></BotMeInPageRouter>
      </Suspense>
    </Main>
  );
}
