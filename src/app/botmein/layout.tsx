import type { ReactNode } from "react";

import { Main } from "@/layouts/rwth/Main";

export default function Layout({ children }: { children: ReactNode }) {
	return <Main institute="htwr">{children}</Main>;
}
