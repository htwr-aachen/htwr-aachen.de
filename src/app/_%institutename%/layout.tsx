import type { ReactNode } from "react";

import { Main } from "@/layouts/rwth/Main";

import { institute, navbar } from "./config";

export default function Layout(props: { children: ReactNode }) {
	return (
		<Main institute={institute} navbar={navbar}>
			{props.children}
		</Main>
	);
}
