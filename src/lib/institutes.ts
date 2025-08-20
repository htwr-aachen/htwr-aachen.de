import type { Institutes } from "@/config/institutes";
import { InstituteConfig, InstituteCount } from "@/config/institutes";

export function getNextInstitute(current: Institutes): Institutes {
	const keys = Object.keys(InstituteConfig) as Institutes[];
	const i = keys.indexOf(current);
	const next = (i + 1) % InstituteCount;
	return keys[next];
}

export function getPrevInstitute(current: Institutes): Institutes {
	const keys = Object.keys(InstituteConfig) as Institutes[];
	const i = keys.indexOf(current);
	const prev = (i - 1) % InstituteCount;
	return keys[prev];
}
