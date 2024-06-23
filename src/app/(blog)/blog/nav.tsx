"use client";

import Link from "next/link";

import {
  invertedNavigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const BlogNav = (
  <NavigationMenu color="neutral-200">
    <NavigationMenuList>
      <NavigationMenuItem className="mr-4">
        <NavigationMenuLink asChild>
          <Link href="/blog" className="text-foreground">
            Übersicht
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={invertedNavigationMenuTriggerStyle()}>
            Zurück zu HTWR
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
