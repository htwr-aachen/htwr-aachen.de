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
			name: "Q&A (StudiencenterV2)",
			href: "/qa",
			path: "/qa",
		},
		{
			name: "Mithelfen",
			href: "/docs",
			path: "/docs",
		},
	],
	main: { name: "HTWR", href: "/" },
};
