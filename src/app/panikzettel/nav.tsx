"use client";

import Link from "next/link";

import {
  invertedNavigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const PanikzettelNav = (
  <NavigationMenu color="neutral-200" className="">
    <NavigationMenuList>
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
