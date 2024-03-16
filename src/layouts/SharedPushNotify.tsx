"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export const PushNotifyContext = createContext({
  show: true,
  setShow: (_: boolean) => {},
});

export const PushNotifyName = "PushNotify";

export const PushNotifyProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setShow(false);
      return;
    }
    const str = window.localStorage.getItem(PushNotifyName);
    if (str === null) {
      setShow(true);
      return;
    }
    const data = JSON.parse(str);
    if (
      (new Date().getTime() - new Date(data.time).getTime()) / 1000 >
      604800
    ) {
      window.localStorage.removeItem(PushNotifyName);
    }
    setShow(false);
  }, []);

  const update = (state: boolean, save = true) => {
    setShow(state);
    if (window && save) {
      if (!state) {
        window.localStorage.setItem(
          PushNotifyName,
          JSON.stringify({
            time: new Date().toISOString(),
          })
        );
      } else {
        window.localStorage.removeItem(PushNotifyName);
      }
    }
  };

  return (
    <PushNotifyContext.Provider value={{ show, setShow: update }}>
      {children}
    </PushNotifyContext.Provider>
  );
};

const SharedPushNotify = () => {
  const { show, setShow } = useContext(PushNotifyContext);
  if (!show) {
    return null;
  }

  return (
    <div className="flex h-24 flex-col items-center justify-center bg-rwth-warn lg:h-12 lg:flex-row xl:relative">
      <p className="text-lg font-medium">
        <Link href="/updates">Wo Klausuren?</Link>
      </p>
      <button
        className="min-h-10 bg-white/40 px-4 py-2 hover:bg-white/60 lg:h-[80%] xl:absolute xl:right-10"
        onClick={() => setShow(false)}
      >
        Nerv nicht
      </button>
    </div>
  );
};

export default SharedPushNotify;
