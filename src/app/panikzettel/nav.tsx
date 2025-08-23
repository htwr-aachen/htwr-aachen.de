"use client";

import Link from "next/link";

import {
	invertedNavigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function PanikzettelNav() {
	return (
		<NavigationMenu color="neutral-200">
			<NavigationMenuList>
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
}
