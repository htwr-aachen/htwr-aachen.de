import type { LayoutProps, NavbarConfig } from "@/models/layout";

import ESNavbar from "./Navbar";

type ESLayoutProps = LayoutProps & {
	navbar: NavbarConfig;
};

export function Main(props: ESLayoutProps) {
	return (
		<div className="es bg-background text-foreground">
			<ESNavbar navbar={props.navbar} />

			<div className="container mx-auto max-w-[1000px] px-8 py-12 lg:px-0">
				{props.children}
			</div>
		</div>
	);
}
