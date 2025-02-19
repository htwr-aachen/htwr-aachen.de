"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { type ReactNode } from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

import { FIXPOINT } from "./anim-control";
import PanikzettelPageAnim from "./page-anim";

export default function SkewedPanikzettelFrontpage({
  children,
}: {
  children: ReactNode;
}) {
  // this is needed because scrollY is a motion value and does not support conditional logic well

  const scrollPosition = useScrollPosition();
  // ANIMATION HOOKS
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, FIXPOINT], [10, 0]);

  return (
    <>
      <div
        className="relative flex w-full justify-center overflow-x-clip"
        style={{ perspective: "500px" }} // i don't know why but this works kinda
      >
        <motion.div
          style={{
            rotateX: scrollPosition < FIXPOINT ? rotateX : "0",
            transformOrigin: "50% 15%",
            translateY: useTransform(scrollY, [0, FIXPOINT], ["-5%", "0%"]),
          }}
          className={cn("z-0 drop-shadow-glow")}
        >
          <PanikzettelPageAnim>{children}</PanikzettelPageAnim>
        </motion.div>
      </div>
    </>
  );
}
