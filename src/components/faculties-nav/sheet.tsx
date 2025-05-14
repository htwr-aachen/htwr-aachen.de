"use client";
import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}
function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className,
      )}
      {...props}
    />
  );
}

export function FacultiesSheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {}) {
  return (
    <SheetPortal>
      <SheetOverlay className="fixed top-0 right-0 bottom-0 left-0 grid overflow-y-auto">
        <SheetPrimitive.Content
          data-slot="sheet-content"
          className={cn(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out lg:data-[state=closed]:slide-out-to-top lg:data-[state=open]:slide-in-from-top max-lg:data-[state=closed]:slide-out-to-right max-lg:data-[state=open]:slide-in-from-right fixed z-50 flex flex-col gap-4 overflow-y-auto shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 max-lg:inset-y-0 max-lg:right-0 max-lg:h-auto max-lg:max-w-sm max-lg:border-l lg:inset-x-0 lg:top-0 lg:h-auto lg:w-full lg:border-b",
            className,
          )}
          {...props}
        >
          {children}
        </SheetPrimitive.Content>
      </SheetOverlay>
    </SheetPortal>
  );
}
