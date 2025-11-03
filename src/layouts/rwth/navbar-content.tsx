"use client";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { CMSILink } from "@/components/rwth/link";
import { InstituteConfig, type Institutes } from "@/config/institutes";
import { cn } from "@/lib/utils";
import type { LinkElement, NavbarConfig } from "@/models/layout";

function MobileNav({ config }: { config: NavbarConfig }) {
	return (
		<div className="px-6 lg:hidden">
			<ul className="block w-full">
				{config.linkElements.map((x) => {
					return (
						<li key={x.path + x.name}>
							{x.links && x.links.length > 0 ? (
								<>
									<CMSILink
										href={x.href}
										withIcon
										scroll={false}
										className="cms-interactive-bottom block py-3 text-xl font-medium"
									>
										{x.name}
									</CMSILink>
									{/* Sub-links with 6 units of left padding */}
									<ul className="pl-6">
										{x.links.map((subLink) => (
											<li key={subLink.path + subLink.name}>
												<Link
													href={subLink.href}
													scroll={false}
													className="block py-2 text-lg text-gray-600"
												>
													{subLink.name}
												</Link>
											</li>
										))}
									</ul>
								</>
							) : (
								<CMSILink
									href={x.href}
									withIcon
									scroll={false}
									className="cms-interactive-bottom block py-3 text-xl font-medium"
								>
									{x.name}
								</CMSILink>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
function DesktopNav({ config }: { config: NavbarConfig }) {
	const [current, setCurrent] = useState<LinkElement | undefined>(undefined);
	return (
		<div
			className={cn(
				current ? "grid-cols-[auto_1fr]" : "grid-cols-1",
				"hidden gap-24 px-12 lg:grid",
			)}
		>
			<ul className="block w-full">
				{config.linkElements.map((x) => {
					return x.links && x.links.length > 0 ? (
						<button
							type="button"
							key={x.path + x.name}
							onClick={() => setCurrent(x)}
							className={cn(
								current ? "text-left" : "mx-auto text-center",
								"cms-interactive-bottom my-12 block cursor-pointer text-3xl",
							)}
						>
							{x.name}
						</button>
					) : (
						<CMSILink
							key={x.path + x.name}
							href={x.href}
							withIcon
							scroll={false}
							className={cn(
								current ? "text-left" : "mx-auto text-center",
								"cms-interactive-bottom group my-12 block w-fit cursor-pointer text-3xl",
							)}
						>
							{x.name}
						</CMSILink>
					);
				})}
			</ul>
			{current && (
				<div>
					<CMSILink
						href={current.href}
						withIcon
						className="cms-interactive-bottom text-4xl font-light"
					>
						{current.name}
					</CMSILink>
					<div className="flex flex-row flex-wrap gap-12 p-12">
						{current.links?.map((x) => {
							return (
								<Link
									key={x.path + x.name}
									href={x.href}
									scroll={false}
									className="mx-8 py-4 text-2xl"
								>
									{x.name}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}

export function NavbarContent({
	institute,
	config,
	open,
	setOpen,
}: {
	institute: Institutes;
	config: NavbarConfig;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) {
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "unset";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [open]);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: "calc(100vh - 4rem)" }}
					exit={{ height: 0 }}
					transition={{
						duration: 0.25,
						ease: "easeOut",
					}}
					className="bg-foreground text-background dark top-16 z-50 w-screen overflow-hidden py-3"
				>
					<div className="grid grid-cols-2 px-12 py-4">
						<button
							type="button"
							className="cursor-pointer"
							onClick={() => {
								setOpen(false);
							}}
						>
							<X className="size-6 lg:size-8"></X>
						</button>
						<Link
							href={InstituteConfig[institute].href}
							scroll={false}
							className="cms-interactive-bottom no-b after:bg-background justify-self-end text-xl text-inherit"
						>
							{InstituteConfig[institute].fullName}
						</Link>
					</div>
					<MobileNav config={config} />
					<DesktopNav config={config} />
				</motion.div>
			)}
		</AnimatePresence>
	);
}
