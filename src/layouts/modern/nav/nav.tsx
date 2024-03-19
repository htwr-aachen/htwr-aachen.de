"use client";

import Link from "next/link";

import {
  invertedNavigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import HTWRLogo from "./logo";
import { ListLinkItem } from "./nav-link";

export default function NavMenu() {
  return (
    <NavigationMenu color="neutral-200" className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={invertedNavigationMenuTriggerStyle()}
          >
            Dokumentation
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.7fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="no-b flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/get-started"
                  >
                    <HTWRLogo height={20} />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Introduction
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Wie funktioniert HTWR? Wie kann ich es erweitern?
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListLinkItem href="/docs/frontend" title="Nextjs Frontend Docs">
                Frontend documentation. Components
              </ListLinkItem>
              <ListLinkItem href="/docs/backend" title="Backend Docs">
                Backend API documentation
              </ListLinkItem>
              <ListLinkItem href="/docs/openapi" title="Backend OpenAPI">
                Backend OpenAPI explorer
              </ListLinkItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Zurück zu HTWR
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
