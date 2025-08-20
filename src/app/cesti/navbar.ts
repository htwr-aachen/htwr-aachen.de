import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
	logo: {
		src: "/assets/cesti/banner.svg",
		alt: "CESTI Logo",
		href: "/cesti",
		width: 380,
		height: 110,
	},
	main: {
		name: "CESTI",
		href: "/cesti",
	},
	linkElements: [
		{
			name: "⚠ IT-Sec",
			href: "/cesti/itsec",
			path: "/cesti/itsec",
			links: [
				{
					name: "⚠ Zusammenfassungen",
					href: "/cesti/itsec/summaries",
				},
				{
					name: "⚠ Material",
					href: "/cesti/itsec/materials",
				},
			],
		},
	],
};
