import type { NavbarConfig } from "@/models/layout";

export const DefaultNavbar: NavbarConfig = {
	linkElements: [
		{
			name: "Blog",
			href: "/blog",
			path: "/blog",
		},
		{
			name: "Panikzettel",
			href: "/panikzettel",
			path: "/panikzettel",
		},
		{
			name: "Bingo",
			href: "/bingo",
			path: "/bingo",
		},
		{
			name: "FAQ",
			href: "/faq",
			path: "/faq",
		},
		{
			name: "Mithelfen",
			href: "/docs",
			path: "/docs",
		},
	],
	main: { name: "HTWR", href: "/" },
};
