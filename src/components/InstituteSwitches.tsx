import Link from "next/link";
import { type FC, useMemo } from "react";

import { InstituteConfig, type Institutes } from "@/config/institutes";
import { getNextInstitute, getPrevInstitute } from "@/lib/institutes";

type InstituteSwitchesProps = {
	institute: Institutes;
	links?: {
		name: string;
		url: string;
	}[];
};

type InstituteSwitchProps = {
	name: string;
	url: string;
	right?: boolean;
};

const InstituteSwitch: FC<InstituteSwitchProps> = ({ url, name, right }) => {
	return (
		<div
			className={`bottom-10 my-3 justify-self-center ${
				right ? "lg:justify-self-end" : "lg:justify-self-start"
			}`}
		>
			<Link
				href={url || "/"}
				className="pointer-events-auto block rounded-md px-3 py-2 transition-transform hover:scale-105 hover:border-b-0"
			>
				{!right ? "<" : ""} Zur {name} Website {right ? ">" : ""}
			</Link>
		</div>
	);
};

export { InstituteSwitch };

const InstituteSwitches: FC<InstituteSwitchesProps> = ({
	links: linksProp,
	institute,
}) => {
	const processedLinks = useMemo(() => {
		if (linksProp) {
			return linksProp;
		}

		if (!institute || institute === "htwr") {
			return [];
		}

		const prev = getPrevInstitute(institute);
		const next = getNextInstitute(institute);
		if (!prev || !next) {
			return [];
		}
		return [
			{
				name: InstituteConfig[prev]?.name || "",
				url: InstituteConfig[prev].href,
			},
			{
				name: InstituteConfig[next]?.name || "",
				url: InstituteConfig[next].href,
			},
		];
	}, [institute, linksProp]);

	return (
		<div className="pointer-events-none left-0 grid w-full grid-cols-1 grid-rows-2 lg:sticky lg:bottom-10 lg:grid-cols-2 lg:grid-rows-1 lg:px-4">
			{processedLinks?.[0]?.url && (
				<InstituteSwitch {...processedLinks[0]} right={false} />
			)}
			{processedLinks?.[1]?.url && (
				<InstituteSwitch {...processedLinks[1]} right={true} />
			)}
		</div>
	);
};

export default InstituteSwitches;
