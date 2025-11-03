/** biome-ignore-all lint/performance/noImgElement: svg images */
"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavbarConfig } from "@/models/layout";
import Navlink from "./Navlink";

export default function ESNavbar({ navbar }: { navbar: NavbarConfig }) {
	const [navOpen, setNavOpen] = useState(false);
	const [dropdownActive, setDropdownActive] = useState(-1);

	const dropdownCallback = (dropdownNumber: number) => {
		if (dropdownActive === dropdownNumber) setDropdownActive(-1);
		else setDropdownActive(dropdownNumber);
	};

	return (
		<nav
			id="navbar"
			className="navbar grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] items-center border-b border-border py-4 lg:grid-cols-2 lg:grid-rows-none"
		>
			<div className="ml-8 flex flex-wrap items-center justify-center lg:mr-16 lg:ml-auto lg:justify-self-end">
				<Link href={"/es"}>
					<img
						src={"/assets/es/es.png"}
						width={276}
						height={70}
						alt="ES Banner"
						className="aspect-auto h-[70px]"
					/>
				</Link>
			</div>

			<button
				type="button"
				className="mr-5 lg:hidden"
				onClick={() => {
					setNavOpen((x) => !x);
				}}
			>
				{!navOpen ? (
					<img src="/assets/menu.svg" alt={"Open Navbar"} className="size-8" />
				) : (
					<img
						src="/assets/close.svg"
						alt={"Close Navbar"}
						className="size-8"
					/>
				)}
			</button>
			<div className="col-span-2 mr-2 flex justify-center justify-self-end lg:col-span-1 lg:mr-auto lg:block lg:justify-start">
				<ul
					className={`flex-col lg:flex lg:flex-row ${
						navOpen ? "flex" : "hidden"
					}`}
				>
					{navbar.linkElements.map((link, i) => (
						<Navlink
							key={link.name + link.path}
							display={{
								name: link.name,
								href: link.href.toString(),
								path: link.path,
							}}
							links={link.links}
							isDropped={dropdownActive === i}
							dropdownNumber={i}
							dropdownCallback={dropdownCallback}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
}
