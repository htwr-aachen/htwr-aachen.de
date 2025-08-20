import type { ReactNode } from "react";
export function QuickLinks({
	children,
	title,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<nav>
			<h3>{title}</h3>
			<ul>{children}</ul>
		</nav>
	);
}
