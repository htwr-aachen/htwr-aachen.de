import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return <div className="prose max-w-full">{children}</div>;
}
