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
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Link href="/blog/rss" className="text-foreground mr-6">
						RSS-Feed
					</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Link href="/blog" className="text-foreground mr-6">
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
