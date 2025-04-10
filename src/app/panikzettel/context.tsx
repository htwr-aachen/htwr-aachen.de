"use client";

import { getPanikzettelMetadata } from "@/lib/panikzettel";
import { Panikzettel } from "@/models/panikzettel";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type PanikzettelContextType = {
  panikzettel: Panikzettel[];
  setPanikzettel: Dispatch<SetStateAction<Panikzettel[]>>;
};

const PanikzettelContext = createContext<PanikzettelContextType | undefined>(
  undefined,
);

export function PanikzettelProvider({ children }: { children: ReactNode }) {
  const [panikzettel, setPanikzettel] = useState<Panikzettel[]>([]);

  useEffect(() => {
    getPanikzettelMetadata().then((data) => setPanikzettel(data));
  }, []);

  return (
    <PanikzettelContext.Provider value={{ panikzettel, setPanikzettel }}>
      {children}
    </PanikzettelContext.Provider>
  );
}

export function usePanikzettel() {
  const context = useContext(PanikzettelContext);
  if (!context) {
    throw new Error("usePanikzettel must be used within a PanikzettelProvider");
  }
  return context;
}
