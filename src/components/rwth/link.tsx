import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function CMSILink({
	className,
	withIcon = false,
	children,
	...props
}: ComponentProps<typeof Link> & { withIcon?: boolean }) {
	return (
		<Link className={cn("group", className)} {...props}>
			{children}
			{withIcon && (
				<ArrowRight className="inline transition-transform group-hover:translate-x-2" />
			)}
		</Link>
	);
}
export function CMSLink({
	className,
	withIcon = false,
	children,
	...props
}: ComponentProps<"a"> & { withIcon?: boolean }) {
	return (
		<a className={cn("group", className)} {...props}>
			{children}
			{withIcon && (
				<ArrowRight className="inline transition-transform group-hover:translate-x-2" />
			)}
		</a>
	);
}
