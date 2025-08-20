import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
	linkElements: [
		{
			name: "SWT",
			href: "/es/swt",
			path: "/es/swt",
			links: [
				{
					name: "Aufgaben",
					href: "/es/swt/materials",
					path: "/es/swt/materials",
				},
				{
					name: "Zusammenfassungen",
					href: "/es/swt/summaries",
					path: "/es/swt/summaries",
				},
			],
		},
	],
	main: {
		name: "ES",
		href: "/es",
		path: "/es",
	},
	logo: {
		href: "/assets/es/es_icon.svg",
		alt: "ES Logo",
	},
};
