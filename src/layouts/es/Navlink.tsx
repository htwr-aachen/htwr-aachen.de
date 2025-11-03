"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { LinkElement } from "@/models/layout";

type NavlinkProps = {
	display: LinkElement;
	links?: LinkElement[];
	isDropped?: boolean;
	dropdownNumber?: number;
	dropdownCallback?: (_dropdownNumber: number) => void;
};

function useOutsideAlerter(
	ref: RefObject<HTMLElement | null>,
	callback: () => void,
) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [callback, ref]);
}

const Navlink: FC<NavlinkProps> = ({
	links,
	display,
	isDropped,
	dropdownNumber,
	dropdownCallback,
}) => {
	const pathname = usePathname();
	const ref = useRef<HTMLDivElement>(null);

	const [isDropdown, setIsDropdown] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [dropdownActive, setDropdownActive] = useState(isDropped);

	useOutsideAlerter(ref, () => {
		if (dropdownActive && dropdownCallback) {
			dropdownCallback(dropdownNumber || 0);
		}
	});

	useEffect(() => {
		if (display.path) {
			console.log(
				"PATHNAME: ",
				pathname,
				" LINK ",
				display,
				" active ",
				pathname?.startsWith(display.path),
			);
			setIsActive(pathname?.startsWith(display.path) || false);
		}
		if (links) {
			setIsDropdown(links.length > 0);
		}
	}, [display, links, pathname]);

	useEffect(() => {
		setDropdownActive(isDropped);
	}, [isDropped]);

	return (
		<li className="p-[.5rem 1rem] my-2 mr-4 cursor-pointer text-right text-base text-foreground lg:my-0 lg:text-center">
			{!isDropdown ? (
				<Link
					href={display.href || "/es"}
					className={cn(
						"transition-colors hover:text-accent",
						isActive
							? "font-bold text-accent/50"
							: "font-normal text-foreground",
					)}
				>
					{display.name}
				</Link>
			) : (
				<div ref={ref}>
					<button
						type="button"
						className={cn(
							"after-icon cursor-pointer transition-colors hover:text-accent",
							isActive
								? "font-bold text-accent/50"
								: "font-normal text-foreground",
						)}
						onClick={() => {
							setIsActive((x) => !x);
							if (dropdownCallback) dropdownCallback(dropdownNumber || 0);
							else setDropdownActive((x) => !x);
						}}
					>
						{display.name}
					</button>
					<div
						className={
							dropdownActive
								? "visible absolute right-2 rounded-md rounded-tl-none border border-border bg-background lg:right-auto"
								: "visible hidden"
						}
					>
						<ul>
							{links?.map((link, index) => (
								<li key={link + index.toString()} className="py-1 no-underline">
									<Link
										href={link.href}
										className={cn(
											"px-10 text-foreground no-underline transition-colors hover:text-accent",
											link.path && pathname.startsWith(link.path)
												? "text-accent/50"
												: "",
										)}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</li>
	);
};

export default Navlink;
