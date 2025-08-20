import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
	linkElements: [
		{
			name: "WSI Home",
			href: "/wsi",
			path: "/wsi",
			links: [],
		},
		{
			name: "Stocha",
			href: "/wsi/stocha",
			path: "/wsi/stocha",
			links: [
				{
					name: "Klausuren",
					href: "/wsi/stocha/exams",
					path: "studium/klausuren",
				},
				{
					name: "Aufgaben",
					href: "/wsi/stocha/materials",
					path: "/wsi/stocha/materials",
				},
				{
					name: "Zusammenfassungen",
					href: "/wsi/stocha/summaries",
					path: "/wsi/stocha/summaries",
				},
			],
		},
		{
			name: "Die Lehrstuhl Gang",
			href: "/contact",
			path: "/contact",
		},
	],
	main: { name: "WSI", href: "/wsi" },
	logo: {
		src: "/assets/wsi/wsi_cropped.jpg",
		alt: "WSI Logo",
		href: "/wsi",
		width: 387,
		height: 110,
	},
};
