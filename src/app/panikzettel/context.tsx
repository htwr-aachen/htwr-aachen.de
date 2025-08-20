"use client";

import {
	createContext,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import { getPanikzettelMetadata } from "@/lib/panikzettel";
import type { Panikzettel } from "@/models/panikzettel";

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
