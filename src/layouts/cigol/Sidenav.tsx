import Link from "next/link";
import type { NavbarConfig } from "@/models/layout";

export default function CigolSideNav({
	navConfig,
}: {
	navConfig: NavbarConfig;
}) {
	return (
		<aside className="mx-6 mb-4 lg:mb-0 lg:w-[200px]">
			<div className="rounded-3xl bg-[#f5eedd]">
				<ul className="py-6 pl-4">
					{navConfig.linkElements.map((link) => (
						<li key={link.name + link.path} className="py-1 first:pt-0">
							<Link
								{...link}
								className="text-opacity-60 hover:text-opacity-100 text-xl font-bold text-black hover:border-b-0"
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}
