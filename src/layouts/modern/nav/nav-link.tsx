"use client";

import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

const ListLinkItem = React.forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
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
});
ListLinkItem.displayName = "ListLinkItem";

const NavLink = React.forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ href, className, children, ...props }, ref) => {
  return (
    <Link href={href} passHref ref={ref} {...props}>
      <NavigationMenuLink
        className={cn("no-b hover:[&>a]:no-underline", className)}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  );
});
NavLink.displayName = "NavLink";

export { ListLinkItem, NavLink };
