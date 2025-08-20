import { CircleChevronDown } from "lucide-react";
import { FacultiesButton } from "../faculties-nav/button";

export function QuickAccess() {
	return (
		<FacultiesButton asChild>
			<button
				type="button"
				className="cms-interactive-top flex h-16 cursor-pointer flex-row items-center justify-end font-normal md:justify-start"
			>
				Quick Access <CircleChevronDown className="ml-2 size-5" />
			</button>
		</FacultiesButton>
	);
}
