/** biome-ignore-all lint/performance/noImgElement: svg images */
"use client";

import Link from "next/link";

import { type NavbarConfig, toValue } from "@/models/layout";

type DeddebmeNavbarProps = {
	config: NavbarConfig;
};

export default function DeddebmeNavbar(props: DeddebmeNavbarProps) {
	return (
		<div>
			<nav className="mx-auto mb-4 grid max-w-6xl grid-cols-2 items-center justify-items-center">
				<div className="flex flex-row items-center pt-4 text-center">
					<span className="mr-4 content-center text-center font-semibold">
						Professor Dr.-Ing. Stefan Kowalewski
					</span>
				</div>

				<div className="flex w-full justify-end pt-5">
					<Link href={props.config?.logo?.href || "/"} className="no-b">
						<img
							alt={props.config?.logo?.alt}
							src={props.config?.logo?.src}
							width={props.config?.logo?.width}
							height={props.config?.logo?.height}
						/>
					</Link>
					<div
						className={`h-[${props.config?.logo?.height}px] bg-accent mx-4 w-1`}
					/>
					<Link href="/" className="no-b">
						<img
							alt="RWTH LOGO"
							src="/assets/rwth/banner.svg"
							height={props.config?.logo?.height}
							width={toValue(props.config?.logo?.height, 0) * 3.66}
						/>
					</Link>
				</div>
			</nav>
		</div>
	);
}
