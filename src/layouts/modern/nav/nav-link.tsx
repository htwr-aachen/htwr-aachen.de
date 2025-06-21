"use client";

import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function ListLinkItem({
  className,
  title,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "no-b hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
