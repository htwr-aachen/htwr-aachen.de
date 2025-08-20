import type { NavbarConfig } from "@/models/layout";

export const DefaultDeddebmeNavbar: NavbarConfig = {
	logo: {
		src: "/assets/deddebme/banner.svg",
		alt: "deddebme Logo",
		href: "/deddebme",
		width: 170,
		height: 58,
	},
	main: {
		name: "DEDDEBME",
		href: "/deddebme",
	},
	linkElements: [
		{
			name: "⚠Lehre",
			href: "/deddebme/lehre",
			path: "/lehre",
			links: [
				{
					name: "Zusammenfassungen",
					href: "/deddebme/lehre/teachings",
				},
				{
					name: "Resourcen",
					href: "/deddebme/lehre/resources",
				},
			],
		},
		{
			name: "⚠Forschung",
			href: "/deddebme/lehre",
		},
		{
			name: "Tools",
			href: "/nichts?path=/deddebme/tools",
		},
		{
			name: "Lehrstuhl",
			href: "/nichts?path=/deddebme/lehrstuhl",
			links: [
				{
					name: "Kontakt",
					href: "/contact",
				},
				{
					name: "Impressum",
					href: "/impressum",
				},
				{
					name: "Datenschutz",
					href: "/datenschutz",
				},
			],
		},
	],
};
