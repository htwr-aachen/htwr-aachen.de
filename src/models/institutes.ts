import type { Institutes } from "@/config/institutes";

export type Institute = {
	name: Institutes;
	professor: string;
	fullName: string;
	href: string;
	icon: string;
	banner?: string;
	description?: string;
	displayName?: string;
};
