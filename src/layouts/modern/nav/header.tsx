// HTWR-Modern layout navbar.
// This will be used when displaying content that is not directly related to RWTH or its chairs/institues (docs, blog,...)

import Link from "next/link";
import type { ReactNode } from "react";

import HTWRIcon from "@/components/icons/htwr";

export function Header(props: {
	nav: ReactNode;
	name: string;
	prefix: string;
}) {
	return (
		<header className="bg-background/[0.6] text-foreground sticky top-0 z-50 grid h-36 w-full grid-rows-2 gap-6 border-b border-neutral-200 px-16 py-6 backdrop-blur-xs md:h-20 md:grid-cols-[1fr_auto] md:grid-rows-1 dark:border-white/[0.1]">
			<div className="flex flex-row items-center text-neutral-100">
				<Link href="/">
					<HTWRIcon height={30}></HTWRIcon>
				</Link>
				<svg
					className="text-foreground mr-1 ml-2"
					stroke="currentColor"
					strokeWidth={1.5}
					strokeLinecap="round"
					viewBox="0 0 25 50"
					height={35}
				>
					<title>Divider</title>
					<path d="M0 50L18 0" />
				</svg>
				<Link href={`/${props.prefix}`}>
					<span className="from-foreground to-secondary-foreground/70 hover:to-secondary-foreground/85 inline-block bg-linear-to-r bg-clip-text text-2xl font-light text-transparent">
						{props.name}
					</span>
				</Link>
			</div>
			{props.nav}
		</header>
	);
}
