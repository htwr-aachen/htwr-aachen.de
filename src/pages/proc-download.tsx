import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { DefaultNavbar } from "@/layouts/rwth/instituteConfig";
import { Main } from "@/layouts/rwth/Main";
import { API_URL } from "@/utils/TeachingConfig";

const PASSWORD_HELP =
  "Wie würde Giesl die Zahl 1 in der Programmiersprache seiner Wahl schreiben? Alles zusammengeschrieben klein ohne Klammern punkte etc.";

const ProctedDownloadPage: FC = () => {
  const isBrowser = typeof window !== "undefined";

  const router = useRouter();
  const [stage, setStage] = useState<number>(0);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const download = async () => {
    try {
      const params = new URLSearchParams({
        file: router.query.file as string,
        password,
      });

      const res = await fetch(
        `${API_URL}/download/klausuren?${params.toString()}`,
        {
          method: "GET",
          redirect: "follow",
        }
      );

      if (res.ok) {
        setError("");
        // download file but keep the name
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = router.query.file as string;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        return;
      }
      switch (res.status) {
        case 401:
          setError("Leider war das Password falsch :[");
          break;
        default:
          setError("Es ist irgendwas falsch gelaufen :(");
          break;
      }
    } catch (e) {
      setError("Es ist irgendwas falsch gelaufen :(");
    }
  };

  const onClick = () => {
    if (stage === 0) {
      if (isCaptchaChecked) {
        setStage(1);
      }
    }
    if (stage === 1) {
      if (isBrowser) {
        download();
      } else {
        setError("Du muss dich in einem Browser befinden für diese Funktion");
      }
    }
  };

  return (
    <Main instituteName="" navbarConfig={DefaultNavbar}>
      <div className="">
        <HeadLine>Captcha: Bist Du Ein Student?</HeadLine>
        <div className="flex flex-col items-center">
          {stage === 0 && (
            <div className="my-24 flex items-center justify-center">
              <input
                id="captcha"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-rwth-accent checked:bg-blue-600 checked:ring-rwth-accent focus:ring-rwth-branding"
                onChange={(i) => {
                  setIsCaptchaChecked(i.target.checked);
                }}
              />
              <label
                htmlFor="captcha"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ja
              </label>
            </div>
          )}
          {stage === 1 && (
            <div className="mb-24 mt-12 flex flex-col items-center">
              <div className="my-6 text-center">
                <h2 className="mb-2 text-xl">
                  Das Password muss jeder Student kennen.
                </h2>
                <h3>{PASSWORD_HELP}</h3>
              </div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="password"
                id="password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Password"
                required
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onClick();
                  }
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          )}
          <button
            className="w-fit rounded bg-rwth-accent  px-16 py-2 text-rwth-branding"
            onClick={() => {
              onClick();
            }}
          >
            {stage === 0 ? "Weiter" : "Download"}
          </button>
          <span className="mt-4 text-red-700">{error}</span>
        </div>
      </div>
    </Main>
  );
};

export default ProctedDownloadPage;
