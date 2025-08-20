"use client";

import { type ReactNode, useContext } from "react";
import { BannerNotifyContext } from "@/components/banner-provider";
import { cn } from "@/lib/utils";

export function TopBarCond({ children }: { children: ReactNode }) {
	const { show } = useContext(BannerNotifyContext);

	return (
		<div
			className={cn(
				show ? "h-32" : "h-16",
				"bg-cms-accent-light text-cms-accent-light-text cms grid w-full grid-cols-2 flex-row items-center justify-center gap-x-6 px-6 text-xl md:h-16 md:grid-cols-[auto_auto_1fr]",
			)}
		>
			{children}
		</div>
	);
}
export function TopBarBannerContainer({ children }: { children: ReactNode }) {
	const { show } = useContext(BannerNotifyContext);

	if (!show) return;

	return <>{children}</>;
}
