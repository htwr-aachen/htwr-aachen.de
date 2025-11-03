"use client";
import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";
import ExportedImage, {
	type ExportedImageProps,
} from "next-image-export-optimizer";
import React, { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { CMSILink, CMSLink } from "./link";

export function GalleryItem({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"block h-full max-h-[650px] overflow-hidden lg:grid lg:h-[650px] lg:grid-cols-[auto_minmax(33%,1fr)]",
				className,
			)}
			{...props}
		/>
	);
}

export function GalleryImage({ className, alt, ...props }: ExportedImageProps) {
	return (
		<ExportedImage
			className={cn(
				"mx-auto block max-h-[350px] min-h-32 w-auto object-contain lg:h-[650px] lg:max-h-[650px]",
				className,
			)}
			alt={alt}
			{...props}
		></ExportedImage>
	);
}

type GalleryLabelProps = {
	children?: ReactNode;
	headline?: string;
	url?: string;
	externalUrls?: {
		url: string;
		text: string;
	}[];
};

export function GalleryLabel({
	headline,
	children,
	url,
	externalUrls,
}: GalleryLabelProps) {
	return (
		<div className="bg-secondary text-secondary-foreground h-full w-full items-center justify-center">
			<div className="px-12 py-6">
				<h3 className="mb-6 text-4xl font-light">{headline}</h3>
				<p className="mb-12 text-left text-xl font-normal">{children}</p>
				<div className="flex flex-row gap-6">
					{url && (
						<CMSILink
							href={url}
							className="cms-button no-b text-xl font-semibold"
						>
							Mehr <span className="ml-4">&gt;</span>
						</CMSILink>
					)}
					{externalUrls?.map(({ url: extUrl, text: extText }) => {
						return (
							<CMSLink
								key={extUrl}
								href={extUrl}
								className="cms-button no-b text-center text-xl font-semibold"
							>
								{extText}
							</CMSLink>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export function Gallery({ children }: { children: ReactNode[] }) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<Carousel
			setApi={setApi}
			opts={{
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 5000,
				}),
				AutoHeight(),
			]}
		>
			<div className="relative">
				<CarouselContent>
					{children.map((x, i) => {
						return <CarouselItem key={x + i.toString()}>{x}</CarouselItem>;
					})}
				</CarouselContent>
				<CarouselPrevious className="bg-background text-foreground absolute left-12 z-20 size-12" />
				<CarouselNext className="bg-background text-foreground absolute right-12 z-20 size-12" />

				<div className="absolute right-12 bottom-6">
					{[...Array(count)].map((link, index) => (
						<button
							type="button"
							key={link + index.toString()}
							className={cn(
								index + 1 === current ? "bg-foreground" : "bg-accent",
								"mx-3 h-0.5 w-6",
							)}
						></button>
					))}
				</div>
			</div>
		</Carousel>
	);
}
