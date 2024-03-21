// this is a small svg icon collection for common rwth/htwr used icons

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

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
const InternalLink = React.forwardRef<
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
    <circle
      cx="25"
      cy="25"
      r="25"
      fill="currentColor"
      className="bg-white"
      mask="url(#internallink-mask)"
    />
  </svg>
));
InternalLink.displayName = "InternalLink";
export { InternalLink };
//internal link
