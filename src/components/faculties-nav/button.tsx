"use client";

import type { ComponentPropsWithoutRef } from "react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { FacultiesDesktopNav } from "./desktop";
import { FacultiesMobileNav } from "./mobile";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Slot } from "@radix-ui/react-slot";

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
      <SheetContent
        hasCloseButton={false}
        title="Fakultätsübersicht"
        side="top"
        className="p-0 max-lg:inset-y-0 max-lg:right-0 max-lg:h-full  max-lg:w-[300px] max-lg:border-l max-lg:data-[state=closed]:slide-out-to-right max-lg:data-[state=open]:slide-in-from-right lg:inset-x-0 lg:top-0 lg:border-b lg:data-[state=closed]:slide-out-to-top lg:data-[state=open]:slide-in-from-top"
      >
        <VisuallyHidden>
          <SheetTitle>Fakultätsübersicht</SheetTitle>
        </VisuallyHidden>
        <FacultiesDesktopNav />
        <FacultiesMobileNav />
      </SheetContent>
    </Sheet>
  );
}
