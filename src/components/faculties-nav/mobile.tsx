"use client";

import { RealInstituteConfig } from "@/config/institutes";
import { useInstituteSearch } from "@/hooks/useInstituteSearch";
import { findAssociatedSubjects } from "@/lib/subjects";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";
import { FacultiesNavHeading } from "./heading";
import { FacultiesNavContent } from "./nav";
import { FacultiesNavLink } from "./nav-link";

export function FacultiesMobileNav() {
	const [filteredInstitute, searchInstitutes] = useInstituteSearch(
		Object.values(RealInstituteConfig),
	);
	return (
		<div className="cms bg-accent text-accent-foreground p-0 lg:hidden">
			<div className="grid grid-cols-[auto_1fr] items-center">
				<div className="p-3">
					<SheetClose asChild>
						<Button variant="default" size="sm" className="cursor-pointer">
							Schliessen
						</Button>
					</SheetClose>
				</div>
				<div className="w-full px-3 py-2">
					<input
						className="w-full rounded-md bg-primary text-foreground px-2 py-2 text-sm"
						placeholder="Search"
						onInput={(e) => {
							searchInstitutes(e.currentTarget.value);
						}}
					></input>
				</div>
			</div>
			<div className="border-r border-border">
				<FacultiesNavHeading>
					{FacultiesNavContent.left.heading}
				</FacultiesNavHeading>
				<ul className="m-0 w-full">
					{FacultiesNavContent.left.links.map((link) => (
						<FacultiesNavLink
							href={link.href}
							tooltipContent={link.tooltip || ""}
							tooltipPlace="right"
							key={link.name}
							subElement={link.subcontent}
						>
							{link.content}
						</FacultiesNavLink>
					))}
				</ul>
			</div>
			<div className="border-l border-border">
				<FacultiesNavHeading>
					{FacultiesNavContent.right.heading}
				</FacultiesNavHeading>
				<ul className="m-0 w-full">
					{FacultiesNavContent.right.links.map((link) => (
						<FacultiesNavLink
							href={link.href}
							tooltipContent={link.tooltip || ""}
							tooltipPlace="right"
							key={link.name}
							subElement={link.subcontent}
						>
							{link.content}
						</FacultiesNavLink>
					))}
				</ul>
			</div>
			<div>
				<div>
					<FacultiesNavHeading>Lehrstühle und Institute</FacultiesNavHeading>
					<ul className="m-0 w-full">
						{filteredInstitute.map((institute) => {
							return (
								<FacultiesNavLink
									key={institute.name}
									href={institute.href}
									subElement={findAssociatedSubjects(institute.name).join(
										" | ",
									)}
									tooltipContent={institute.fullName}
									tooltipPlace="left"
								>{`${institute.name} (${institute.professor})`}</FacultiesNavLink>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
