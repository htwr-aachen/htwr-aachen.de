"use client";

import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { type ReactNode, useState, useEffect } from "react";

import { FacultiesDesktopNav } from "./desktop";
import { FacultiesNavContext } from "./nav";
import { FacultiesMobileNav } from "./mobile";
import { usePathname } from "next/navigation";

export default function FacultiesNav({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <FacultiesNavContext.Provider value={[open, setOpen]}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open && <FacultiesDesktopNav></FacultiesDesktopNav>}
        </AnimatePresence>
        {children}
        <FacultiesMobileNav />
      </LazyMotion>
    </FacultiesNavContext.Provider>
  );
}
