"use client";

import { RealInstituteConfig } from "@/config/institutes";
import { useInstituteSearch } from "@/hooks/useInstituteSearch";
import { findAssociatedSubjects } from "@/lib/subjects";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SheetClose } from "../ui/sheet";
import { FacultiesNavHeading } from "./heading";
import { FacultiesNavContent } from "./nav";
import { FacultiesNavLink } from "./nav-link";

export function FacultiesDesktopNav() {
	const [filteredInstitute, searchInstitutes] = useInstituteSearch(
		Object.values(RealInstituteConfig).reverse(),
	);

	return (
		<div className="cms bg-accent text-accent-foreground relative hidden overflow-hidden px-32 lg:block">
			<div className="relative hidden grid-rows-[auto_1fr] lg:grid">
				<div className="border-b border-border py-6">
					<SheetClose asChild>
						<Button variant="default" size="sm" className="cursor-pointer">
							Schliessen
						</Button>
					</SheetClose>
				</div>
				<div className="grid grid-cols-[1fr_2fr_1fr] py-4">
					<div className="border-r border-border pr-4">
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

					<div className="px-4">
						<FacultiesNavHeading>Lehrstühle und Institute</FacultiesNavHeading>
						<ul className="mb-2 grid grid-cols-2 gap-2">
							{filteredInstitute.map((institute) => {
								return (
									<FacultiesNavLink
										key={institute.name}
										href={institute.href}
										subElement={findAssociatedSubjects(institute.name)}
										tooltipContent={institute.fullName}
										tooltipPlace="bottom"
									>{`${
										institute?.displayName || institute.name.toUpperCase()
									} (${institute.professor})`}</FacultiesNavLink>
								);
							})}
						</ul>
						<div className="col-span-2 grid grid-cols-2 border-t-4 border-border pt-6 pb-2">
							<FacultiesNavHeading>Institut suchen</FacultiesNavHeading>
							<div className="grid items-center justify-center">
								<Input
									className="bg-primary text-primary-foreground px-2 py-2 text-sm"
									placeholder="Search"
									onInput={(e) => {
										searchInstitutes(e.currentTarget.value);
									}}
								></Input>
							</div>
						</div>
					</div>

					<div className="border-l border-border pl-4">
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
				</div>
			</div>
		</div>
	);
}
