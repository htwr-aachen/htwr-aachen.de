"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useWindowSize } from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";

import { WIDTH_SCALE_POINT } from "./anim-control";

export default function PanikzettelPageAnim({
	children,
}: {
	children: ReactNode;
}) {
	const scrollPosition = useScrollPosition();
	const { width } = useWindowSize();
	const { scrollY } = useScroll();
	const widthMotionValue = useTransform(
		scrollY,
		[200, WIDTH_SCALE_POINT],
		[750, width],
	);
	return (
		<motion.div
			style={{
				width: scrollPosition < WIDTH_SCALE_POINT ? widthMotionValue : "100vw",
			}}
			className={cn(
				"md:auto h-full min-h-[1020px] w-screen max-w-[100vw] rounded-lg bg-white md:w-[750px] md:min-w-[750px]",
			)}
		>
			{children}
		</motion.div>
	);
}
