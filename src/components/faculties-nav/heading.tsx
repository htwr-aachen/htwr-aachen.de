import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const FacultiesNavHeading = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ children, className }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "grid items-center justify-start bg-white/10 px-3 py-2 text-sm font-bold uppercase lg:bg-transparent lg:px-0 lg:pb-3 lg:text-lg",
        className,
      )}
    >
      {children}
    </h3>
  );
});
FacultiesNavHeading.displayName = "FacultiesNavHeading";

export { FacultiesNavHeading };
