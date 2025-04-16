"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function FAQSearch() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((current) => !current);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [setOpen]);
  return (
    <div className="relative my-4">
      <button
        onClick={() => setOpen(true)}
        className="border-input bg-background flex h-10 w-full cursor-pointer items-center rounded-md border px-3 py-2"
      >
        <Search className="mr-2 size-4"></Search>
        Suchen... (To be worked on)
        <kbd className="bg-muted pointer-events-none absolute top-1/2 right-[0.4rem] hidden h-5 -translate-y-1/2 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
          <span className="text-xs">CTRL</span>k
        </kbd>
      </button>
    </div>
  );
}
