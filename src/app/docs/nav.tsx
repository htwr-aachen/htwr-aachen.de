"use client";

import Link from "next/link";

import HTWRIcon from "@/components/icons/htwr";
import {
  invertedNavigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListLinkItem } from "@/layouts/modern/nav/nav-link";

export const DocsNav = (
  <NavigationMenu color="neutral-200" className="">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Dokumentation HTWR</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.7fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="no-b flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/docs"
                >
                  <HTWRIcon height={20} />
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
        <NavigationMenuTrigger>Dokumentation Panikzettel</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
            <ListLinkItem href="/docs/panikzettel" title="Panikzettel Intro">
              Wie? Wo? Was? weiß ${"{insert name}"}
            </ListLinkItem>
            <ListLinkItem
              href="/docs/guides/new-panikzettel"
              title="Neuen Panikzettel schreiben"
            >
              Worauf du Achten solltest
            </ListLinkItem>
            <ListLinkItem
              href="/docs/guides/fix-panikzettel"
              title="Aktuallisiere einen Panikzettel"
            >
              Du alterst, Panikzettel sollten aber am besten nicht altern
            </ListLinkItem>
          </ul>
        </NavigationMenuContent>
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
