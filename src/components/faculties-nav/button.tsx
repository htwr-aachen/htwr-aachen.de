"use client";

import type { ComponentProps, ComponentPropsWithoutRef } from "react";

import { Sheet, SheetTitle, SheetTrigger } from "../ui/sheet";
import { FacultiesDesktopNav } from "./desktop";
import { FacultiesMobileNav } from "./mobile";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Slot } from "@radix-ui/react-slot";
import { DialogDescription } from "../ui/dialog";
import { FacultiesSheetContent } from "./sheet";
import { CircleChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

type ButtonProps = AsChildProps<ComponentPropsWithoutRef<"button">>;

export function FacultiesButton({ asChild, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Sheet>
      <SheetTrigger asChild title="Fakultätsübersicht">
        <Component {...props} />
      </SheetTrigger>
      <FacultiesSheetContent title="Fakultätsübersicht">
        <VisuallyHidden>
          <SheetTitle>Fakultätsübersicht</SheetTitle>
          <DialogDescription></DialogDescription>
        </VisuallyHidden>
        <FacultiesDesktopNav />
        <FacultiesMobileNav />
      </FacultiesSheetContent>
    </Sheet>
  );
}

export function StyledFacultiesButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <FacultiesButton
      className={cn("flex flex-row items-center", className)}
      {...props}
    >
      Menü <CircleChevronDown className="ml-2 size-4" />
    </FacultiesButton>
  );
}
