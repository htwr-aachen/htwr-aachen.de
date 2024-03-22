"use client";

import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { type ReactNode, useState } from "react";

import { FacultiesDesktopNav } from "./desktop";
import { FacultiesNavContext } from "./nav";

export default function FacultiesNav({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <FacultiesNavContext.Provider value={[open, setOpen]}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open && <FacultiesDesktopNav></FacultiesDesktopNav>}
        </AnimatePresence>
      </LazyMotion>
      {children}
    </FacultiesNavContext.Provider>
  );
}
