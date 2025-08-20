import type { ReactNode } from "react";
import Footer from "./footer";
import { TopBar } from "./top-bar";

export default function GeneralLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen">
			<TopBar />
			<div className="relative">{children}</div>
			<Footer />
		</div>
	);
}
