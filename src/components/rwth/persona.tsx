import Link from "next/link";
import type { FC, ReactNode } from "react";

type PersonaElementProps = {
	children: ReactNode;
	href: string;
};
export const PersonaElement: FC<PersonaElementProps> = ({ children, href }) => {
	return (
		<li className="h-[115px] hover:bg-background/75">
			<Link
				className="grid h-full items-center justify-center px-2 py-5 text-center text-sm hover:border-b-0 lg:px-5 lg:text-base"
				href={href}
			>
				<div>{children}</div>
			</Link>
		</li>
	);
};

export function Persona({ children }: { children: ReactNode }) {
	return (
		<ul className="bg-secondary text-secondary-foreground flex min-h-[115px] flex-wrap items-center justify-center px-2">
			{children}
		</ul>
	);
}
