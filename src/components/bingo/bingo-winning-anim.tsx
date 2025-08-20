"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const outerVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		transition: {
			delay: 0.5,
			duration: 0.2,
		},
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			when: "beforeChildren",
			duration: 0.3,
		},
	},
};

const containerVariants = {
	hidden: {
		transition: {
			duration: 0.2,
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
	visible: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const characterVariants = {
	hidden: { opacity: 0, y: -75, transition: { duration: 0.1 } },
	visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const bingoChars = "Bingo!!".split("");

export function BingoWinningAnim(props: { winning: boolean }) {
	const [currentZIndex, setZIndex] = useState(props.winning ? 10 : -10);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (props.winning) {
			setZIndex(10);
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
		} else {
			timeoutRef.current = setTimeout(() => {
				setZIndex(-10);
			}, 800);
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
		};
	}, [props.winning]);
	return (
		<motion.div
			className={cn(
				"absolute top-0 right-0 bottom-0 left-0 flex h-full w-full items-center justify-center bg-green-500 text-4xl font-bold text-white",
			)}
			style={{ zIndex: currentZIndex }}
			variants={outerVariants}
			initial="hidden"
			animate={props.winning ? "visible" : "hidden"}
		>
			<motion.div
				variants={containerVariants}
				animate={props.winning ? "visible" : "hidden"}
			>
				{bingoChars.map((char, index) => (
					<motion.span
						key={char + index.toString()}
						className="inline-block"
						variants={characterVariants}
					>
						{char === " " ? "\u00A0" : char}{" "}
					</motion.span>
				))}
			</motion.div>
		</motion.div>
	);
}
