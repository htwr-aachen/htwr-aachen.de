// FROM aceternity

import Link from "next/link";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
				className,
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"text-card-foreground group/bento shadow-card-foreground/5 bg-card border-card-foreground/10 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 shadow-sm transition duration-200 hover:shadow-2xl",
				className,
			)}
		>
			{header}
			<div className="transition duration-200 group-hover/bento:translate-x-2">
				{icon}
				<div className="my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
					{title}
				</div>
				<div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
					{description}
				</div>
			</div>
		</div>
	);
};

export const BentoGridLink = ({
	className,
	title,
	description,
	header,
	icon,
	href,
	passHref,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	href: string;
	passHref?: boolean;
}) => {
	return (
		<Link
			href={href}
			passHref={passHref === undefined ? true : passHref}
			className={cn(
				"no-b text-card-foreground group/bento shadow-card-foreground/5 bg-card border-card-foreground/10 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 shadow-sm transition duration-200 hover:shadow-2xl",
				className,
			)}
		>
			{header}
			<div className="transition duration-200 group-hover/bento:translate-x-2">
				{icon}
				<div className="my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
					{title}
				</div>
				<div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
					{description}
				</div>
			</div>
		</Link>
	);
};
