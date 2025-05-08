"use client";

import Link from "next/link";

import {
  invertedNavigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const QANav = (
  <NavigationMenu color="neutral-200">
    <NavigationMenuList>
      <NavigationMenuItem className="mr-4">
        <NavigationMenuLink asChild>
          <Link href="/qa" className="text-foreground">
            Übersicht
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className={invertedNavigationMenuTriggerStyle()}
        >
          <Link href="/">Zurück zu HTWR</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
