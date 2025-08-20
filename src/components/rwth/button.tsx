import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function CMSButton({ className, ...props }: ComponentProps<"button">) {
	return <button className={cn("cms-button", className)} {...props}></button>;
}
