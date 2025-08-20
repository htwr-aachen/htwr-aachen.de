import type { ReactNode } from "react";
import type { Institutes } from "@/config/institutes";
import type { NavbarConfig } from "@/models/layout";
import { SysComNav } from "./nav";

const SysComLayout = (props: {
	children: ReactNode;
	institute: Institutes;
	prefix: string;
	nav: NavbarConfig;
}) => {
	return (
		<div className="bg-rwth-branding light text-black">
			<SysComNav config={props.nav} />
			<div className="py-24">{props.children}</div>
		</div>
	);
};

export default SysComLayout;
