"use client";

// confusing name but its better lived in a separate file than in page

import { Copyright } from "lucide-react";
import { motion } from "motion/react";

export function ExamAnim() {
	const variants = {
		initial: {
			opacity: 1,
			y: 0,
		},
		animate: {
			opacity: 0,
			y: "-100%",
			transition: {
				duration: 0.2,
			},
		},
	};
	const secondVariants = {
		initial: {
			opacity: 0,
			y: 0,
		},
		animate: {
			opacity: 1,
			y: "-100%",
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex h-40 w-full flex-col items-center overflow-hidden font-mono text-9xl font-bold"
		>
			<motion.span variants={variants} className="">
				<Copyright className="size-40"></Copyright>
			</motion.span>
			<motion.span variants={secondVariants}>
				<svg
					width="10rem"
					height="10rem"
					viewBox="0 0 24 24"
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					className="stroke-linejoin stroke-white"
					strokeWidth="1.75"
					role="img"
					aria-label="Copyright Symbol"
				>
					<path d="M8.2,23.5V21.59L5.49,18.88a3.82,3.82,0,0,1-1.12-2.7V12.64a2.52,2.52,0,0,1,1.31-2.27,2.38,2.38,0,0,1,2.52.22" />
					<path d="M11.07,10.11v-1h0A2.87,2.87,0,0,0,8.2,12v3.83" />
					<path d="M18.72,23.5V20.63l.08-.17a17.18,17.18,0,0,0,1.83-7.74h0A2.85,2.85,0,0,0,18,9.88L14.89,9.7V3.41a1.91,1.91,0,0,0-2.38-1.85,2,2,0,0,0-1.44,2v6.59" />
				</svg>
			</motion.span>
		</motion.div>
	);
}

export function TypoAnim() {
	const variants = {
		initial: {
			pathLength: 0,
		},
		animate: {
			pathLength: 1,
			transition: {
				duration: 0.3,
			},
		},
	};
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex size-full items-center justify-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="10rem"
				height="10rem"
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-spell-check-2 stroke-white"
			>
				<title>Marked Typo Symbol</title>
				<path d="m6 16 6-12 6 12" />
				<path d="M8 12h8" />
				<motion.path
					variants={variants}
					className="stroke-orange-500"
					d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
				/>
			</svg>
		</motion.div>
	);
}

export function TeachingAnim() {
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex size-full items-center justify-center"
		>
			<svg
				width="10rem"
				height="10rem"
				viewBox="0 0 24 25"
				version="1.1"
				id="svg1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Ruminating Cow Symbol</title>
				<path
					fill="white"
					d="M 7.7775,1.0250977 C 7.3226598,1.1289113 7.0000407,1.5334434 7.0000195,1.9999805 V 3 H 1.9999805 C 1.4477034,3.0000215 1.0000087,3.4477424 1.0000195,4.0000195 1.1279024,5.9337255 2.3733126,7.6145963 4.1859961,8.2999805 4.0634983,8.8583973 4.0011507,9.4283263 4.0000195,10.00002 v 2.673164 C 4.3311515,13.477903 5.8896603,12.901981 6,11.870684 V 10.00002 c 0,-3.3137107 2.6862916,-5.9999974 6,-5.9999974 3.313708,0 6,2.6862867 6,5.9999974 v 1.872363 c 0.325541,0.928145 1.995304,1.34219 1.99998,0.784394 V 10.00002 C 19.998849,9.4283263 19.936502,8.8583973 19.814004,8.2999805 21.626687,7.6145961 22.872097,5.9337254 22.99998,4.0000195 22.999991,3.4477428 22.552297,3.0000221 22.00002,3 H 16.99998 V 1.9999805 c -0.0059,-1.32736994 -1.994044,-1.32736994 -1.99998,0 v 0.5890429 c -1.922916,-0.7852871 -4.077084,-0.7852871 -6,0 V 1.9999805 C 8.999968,1.3579103 8.4034752,0.88223708 7.7775,1.0250977 Z M 3.2940234,4.9999805 H 5.7649805 C 5.4227416,5.4283746 5.1248859,5.8904122 4.8759961,6.3789844 c -0.006,0.012 -0.01398,0.021039 -0.01998,0.035039 C 4.1935589,6.1279845 3.6443557,5.6308009 3.2940234,4.9999805 Z m 14.9409966,0 h 2.46996 c -0.349599,0.6310357 -0.898579,1.1283341 -1.560996,1.4140429 -0.006,-0.011 -0.01199,-0.02 -0.01699,-0.03 C 18.877017,5.8938256 18.578177,5.4301254 18.23502,4.9999805 Z m -8.165918,6.0947465 c -0.072486,0.0074 -0.1449283,0.01521 -0.2173247,0.02344 0.072307,-0.0082 0.1447515,-0.01599 0.2173247,-0.02344 z"
				/>
				<circle cx="10.072527" cy="8.8500004" r="1.35" className="fill-white" />
				<circle cx="13.913767" cy="8.8500004" r="1.35" className="fill-white" />
				<motion.g
					variants={{
						initial: {
							y: "0px",
						},
						animate: {
							y: "1px",
							transition: {
								duration: 0.3,
								repeat: Infinity,
								repeatType: "reverse",
							},
						},
					}}
				>
					<ellipse
						className="stroke-white stroke-2"
						id="path2"
						cx="12.012212"
						cy="17.047491"
						rx="10"
						ry="5"
					/>
					<circle cx="15.986294" cy="17.005356" r="2" className="fill-white" />
					<circle cx="8" cy="17.005356" r="2" className="fill-white" />
				</motion.g>
			</svg>
		</motion.div>
	);
}

/**
 * A icon/animation for custom react stuff
 */
export function CustomAnim() {
	return (
		<pre lang="html" className="p-0 text-base">
			<code>
				{`
  <h1>Hier ein paar Ideen die einer machen könnte</h1>
  <ul>
    <li>Eine Memepage</li>
    <li>Eine Link Seite</li>
  </ul>
        `}
			</code>
		</pre>
	);
}

export function PanikzettelAnim() {
	const variants = {
		initial: {
			pathLength: 0,
			opacity: 0,
		},
		animate: {
			opacity: 1,
			pathLength: 1,
			transition: {
				duration: 0.3,
			},
		},
	};
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex size-full items-center justify-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 30"
				fill="none"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-user size-40 stroke-current text-white"
			>
				<title>Panikzettel Symbol</title>
				<motion.ellipse
					variants={variants}
					cx="12"
					cy="4"
					rx="8"
					ry="2.5"
					className="stroke-white"
				/>
				<g className="translate-y-[6px]">
					<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
					<circle cx="12" cy="7" r="4" />
				</g>
			</svg>
		</motion.div>
	);
}
export function BackendIcon() {
	const variants = {
		initial: {
			pathLength: 0,
		},
		animate: {
			pathLength: 1,
			transition: {
				duration: 0.3,
			},
		},
	};
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex size-full items-center justify-center"
		>
			<svg
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				className="size-40 stroke-current"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<title>Backend Symbol</title>
				<motion.path variants={variants} d="M4 18V6" />
				<motion.path variants={variants} d="M20 6L20 18" />
				<motion.path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" />
				<motion.path d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" />
				<motion.path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18" />
			</svg>
		</motion.div>
	);
}
export function GuidesIcon() {
	const variants = {
		initial: {
			rotate: 0,
		},
		animate: {
			rotate: 180,
			transition: {
				duration: 0.3,
			},
		},
	};
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex size-full items-center justify-center"
		>
			<svg
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				className="size-40 fill-current"
			>
				<title>Guide Symbol</title>
				<path d="M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z" />
				<motion.path
					variants={variants}
					d="m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
				/>
			</svg>
		</motion.div>
	);
}
