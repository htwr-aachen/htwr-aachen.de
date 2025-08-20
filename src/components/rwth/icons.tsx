// this is a small svg icon collection for common rwth/htwr used icons

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const iconVariants = cva("", {
	variants: {
		variant: {
			default: "",
			flipped: "",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const InternalLinkIcon = React.forwardRef<
	SVGSVGElement,
	React.HTMLAttributes<SVGSVGElement> & VariantProps<typeof iconVariants>
>(({ className, variant, ...props }, ref) => (
	<svg
		ref={ref}
		width="100%"
		height="100%"
		viewBox="0 0 50 50"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		xmlSpace="preserve"
		className={cn(iconVariants({ variant }), className)}
		{...props}
	>
		<title>Link Icon</title>
		<path
			fill="currentColor"
			d="M 25,0 A 25,25 0 0 0 0,25 25,25 0 0 0 25,50 25,25 0 0 0 50,25 25,25 0 0 0 25,0 Z M 18.470703,7.2851562 36.15625,24.96875 36.125,25 36.15625,25.03125 18.472656,42.714844 13.84375,38.087891 26.931641,25.001953 13.84375,11.912109 Z"
		/>
	</svg>
));
InternalLinkIcon.displayName = "InternalLinkIcon";
export { InternalLinkIcon };
