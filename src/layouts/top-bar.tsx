import Link from "next/link";
import { BlogBannerContent } from "@/components/banner";
import { BannerClose } from "@/components/banner-provider";
import { QuickAccess } from "@/components/rwth/quick-access";
import { TopBarBannerContainer, TopBarCond } from "./top-bar-con";

export function TopBar() {
	return (
		<TopBarCond>
			<Link
				href="/"
				className="no-b flex h-16 items-center justify-start font-bold text-inherit"
			>
				HTWR Home
			</Link>
			<QuickAccess />
			<TopBarBannerContainer>
				<div className="col-span-2 grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-3 overflow-hidden overflow-ellipsis md:col-span-1 md:grid-cols-[1fr_auto_auto] md:justify-self-end">
					<div></div>
					<BlogBannerContent />
					<BannerClose
						variant="outline"
						className="cursor-pointer dark:hover:bg-accent"
					>
						Nerv nicht
					</BannerClose>
				</div>
			</TopBarBannerContainer>
		</TopBarCond>
	);
}
