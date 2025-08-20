"use client";

import {
  ComponentProps,
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
    <div className="col-span-2 grid h-16 w-full grid-cols-[1fr_auto] items-center justify-center">
      <div className="text-lg font-medium">{children}</div>
      <button
        className="bg-cms-accent h-auto p-0"
        onClick={() => setShow(false)}
      >
        Nerv nicht
      </button>
    </div>
  );
}

export function BannerClose({
  onClick,
  children,
  ...props
}: ComponentProps<"button">) {
  const { setShow } = useContext(BannerNotifyContext);

  return (
    <button
      onClick={(e) => {
        setShow(false);
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {children}
    </button>
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
