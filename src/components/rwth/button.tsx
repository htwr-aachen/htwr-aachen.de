import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function CMSButton({ className, ...props }: ComponentProps<"button">) {
  return <button className={cn("cms-button", className)} {...props}></button>;
}
