import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
	logo: {
		href: "/assets/cigol/logo.svg",
	},
	main: {
		href: "/cigol",
		name: "Cigol",
	},
	linkElements: [
		{
			name: "Cigol Home",
			href: "/cigol",
		},
		{
			name: "Malo",
			href: "/cigol/malo",
		},
	],
};
