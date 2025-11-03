import { DefaultNavbar } from "@/app/navbar";
import { cn } from "@/lib/utils";

import type { LayoutProps, NavbarConfig } from "../../models/layout";
import Navbar from "./navbar";

type RWTHProps = {
	fullWidth?: boolean;
	navbar?: NavbarConfig;
	addPadding?: boolean;
};

type MainProps = LayoutProps & RWTHProps;

/**
 * The RWTH Layout component
 * @param props.institute - The institute to display and get configuration from
 * @param props.navbar - the navbar to display
 * @param fullWidth - if true does not add padding instead the content will take the whole width of the container
 * @param addPadding - whether to add vertical padding to the navbar. Defaults to `true`
 */
const Main = ({
	institute,
	navbar,
	fullWidth,
	addPadding = true,
	children,
}: MainProps) => {
	return (
		<div className={`${institute} cms relative bg-background text-foreground`}>
			<div className="w-full lg:mx-auto">
				<Navbar config={navbar || DefaultNavbar} institute={institute} />
				<div className={cn(" m-0 w-full", addPadding && "py-12")}>
					<div className={cn("mx-auto w-full", !fullWidth && "max-w-[100ch]")}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export { Main };
