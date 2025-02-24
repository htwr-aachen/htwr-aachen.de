"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/** A react context to control whether to show the notify banner or not */
export const BannerNotifyContext = createContext({
  show: true,
  setShow: (_: boolean) => {},
});

/**
 * Under this name the BannerNotifyProvider saves whether to show this or not in the localStorage.
 */
export const PushNotifyName = "BannerNotify";

/**
 * BannerContent component. Only shows the banner when it was not disabled since a week ago.
 * @param props.children - the content of the banner
 */
export function BannerContent({ children }: { children: ReactNode }) {
  // We must use a client component because of useContext and then wrap a server component that can access the fs.
  const { show, setShow } = useContext(BannerNotifyContext);

  if (!show) {
    return <></>;
  }

  return (
    <div className="bg-rwth-warn flex h-24 flex-col items-center justify-center lg:h-12 lg:flex-row xl:relative">
      <div className="text-lg font-medium">{children}</div>
      <button
        className="min-h-10 bg-white/40 px-4 py-2 hover:bg-white/60 lg:h-4/5 xl:absolute xl:right-10"
        onClick={() => setShow(false)}
      >
        Nerv nicht
      </button>
    </div>
  );
}

/**
 * A context provider wrapper that saves whether a use disabled the banner for 1 week
 */
export function BannerNotifyProvider({ children }: { children: ReactNode }) {
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
    if (typeof window !== "undefined" && save) {
      if (!state) {
        window.localStorage.setItem(
          PushNotifyName,
          JSON.stringify({
            time: new Date().toISOString(),
          }),
        );
      } else {
        window.localStorage.removeItem(PushNotifyName);
      }
    }
  };

  return (
    <BannerNotifyContext.Provider value={{ show, setShow: update }}>
      {children}
    </BannerNotifyContext.Provider>
  );
}
