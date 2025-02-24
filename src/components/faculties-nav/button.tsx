"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Children, cloneElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { FacultiesDesktopNav } from "./desktop";
import { FacultiesMobileNav } from "./mobile";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

type ButtonProps = AsChildProps<ComponentPropsWithoutRef<"button">>;

function Slot({
  children,
  ...props
}: ComponentPropsWithoutRef<"button"> & { children?: ReactNode }) {
  if (isValidElement(children)) {
    const newProps = {
      ...props,
      ...children.props,
    };

    // merge tailwind classes
    newProps.className = twMerge(props.className, children.props.className);
    // merge handlers
    Object.keys(children.props)
      .filter((x) => /^on[A-Z]/.test(x))
      .forEach((propName) => {
        const slotValue = (props as Record<string, any>)[propName];
        if (slotValue && children.props[propName]) {
          newProps[propName] = (...args: unknown[]) => {
            children.props[propName](...args);
            slotValue(...args);
          };
        } else if (slotValue) {
          newProps[propName] = slotValue;
        }
      });
    return cloneElement(children, newProps);
  }

  if (Children.count(children) > 1) {
    Children.only(null);
  }

  return null;
}

export function FacultiesButton({ asChild, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <>
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
    </>
  );
}
