/** biome-ignore-all lint/performance/noImgElement: we have no dim */
"use client";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Institutes } from "@/config/institutes";
import type { NavbarConfig } from "@/models/layout";
import { NavbarContent } from "./navbar-content";

export default function Navbar({
	config,
	institute,
}: {
	config: NavbarConfig;
	institute: Institutes;
}) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<nav className="bg-cms-bg text-cms-bg-text relative w-full border-b-1 border-black">
			<NavbarContent
				institute={institute}
				config={config}
				open={open}
				setOpen={setOpen}
			/>
			<div className="px-12 py-6">
				<div className="mb-3 grid grid-cols-1 items-center gap-3 md:grid-cols-[auto_1fr]">
					<div className="flex flex-row items-center gap-3 lg:gap-12">
						<button
							type="button"
							className="cursor-pointer"
							onClick={() => setOpen(true)}
						>
							<Menu className="size-8 lg:size-12"></Menu>
						</button>
						<Search className="size-8 cursor-not-allowed lg:size-10"></Search>
					</div>
					<div className="flex flex-row gap-x-4 justify-self-end">
						{config.logo && (
							<>
								<Link href={config.logo.href} className="no-b">
									<img
										alt={config.logo.alt || ""}
										{...config.logo}
										className="h-14 w-auto object-scale-down"
									/>
								</Link>
								<span className="bg-cms-branding w-[2px]"></span>
							</>
						)}
						<Link href="/" className="no-b">
							<img
								src="/assets/rwth/banner.svg"
								alt="htwr logo"
								className="h-14 w-auto object-scale-down"
							/>
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-[1fr_auto] items-center">
					<h3 className="text-4xl font-light">{config.main.name}</h3>
				</div>
			</div>
		</nav>
	);
}
