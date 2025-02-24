"use client";

import { motion } from "motion/react";

// This is the title animation for the panikzettel page.
// Because of the animation process it is better lived outside the page as a standalone component.
// But not worth putting inside the shared component tree

export default function PanikzettelTitleAnim() {
  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    flicker: {
      opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 1],
      },
    },
  };
  return (
    <motion.h1 className="drop-shadow-glow z-10 text-center text-6xl font-bold md:my-24 md:mt-16 md:text-9xl md:leading-[10rem]">
      <motion.span initial="initial" animate="flicker" variants={textVariants}>
        Panik?
      </motion.span>
      <br></br>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Zettel!
      </motion.span>
    </motion.h1>
  );
}
