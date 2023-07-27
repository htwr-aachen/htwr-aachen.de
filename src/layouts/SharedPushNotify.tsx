"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

const PushNotifyContext = createContext({
  show: true,
  setShow: (_: boolean) => {},
});

export const PushNotifyProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(true);
  return (
    <PushNotifyContext.Provider value={{ show, setShow }}>
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
    <div className="relative flex h-12 items-center justify-center bg-rwth-warn">
      <p className="text-lg font-medium">
        <Link href="/updates">Inspiration für DBIS irgendwer?</Link>
      </p>
      <button
        className="absolute right-10 h-[80%] bg-white/40 px-4 hover:bg-white/60"
        onClick={() => setShow(false)}
      >
        Mag ich nicht. Mach mich weg!
      </button>
    </div>
  );
};

export default SharedPushNotify;
