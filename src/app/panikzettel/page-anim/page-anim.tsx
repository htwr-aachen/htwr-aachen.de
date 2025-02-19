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
    [750, width]
  );
  return (
    <motion.div
      style={{
        width: scrollPosition < WIDTH_SCALE_POINT ? widthMotionValue : "100vw",
      }}
      className={cn(
        "min-h-[1020px] h-full md:min-w-[750px] max-w-[100vw] md:w-[750px] w-screen md:auto bg-white rounded-lg"
      )}
    >
      {children}
    </motion.div>
  );
}
