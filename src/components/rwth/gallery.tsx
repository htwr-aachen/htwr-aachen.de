"use client";
import { ComponentProps, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CMSILink, CMSLink } from "./link";
import React from "react";

export function GalleryItem({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      role="img"
      className={cn(
        "grid h-[450px] grid-cols-[auto_1fr] overflow-hidden lg:h-[650px]",
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
        "block h-[450px] w-auto object-cover lg:h-[650px]",
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
    <div className="bg-cms-accent-light w-full items-center justify-center">
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
      ]}
    >
      <div className="relative">
        <CarouselContent>
          {children.map((x, i) => {
            return <CarouselItem key={i}>{x}</CarouselItem>;
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-cms-bg text-cms-bg-text absolute left-12 z-20 size-12" />
        <CarouselNext className="bg-cms-bg text-cms-bg-text absolute right-12 z-20 size-12" />

        <div className="absolute right-12 bottom-6">
          {[...Array(count)].map((_, index) => (
            <button
              key={index}
              className={cn(
                index + 1 == current ? "bg-cms-bg-text" : "bg-cms-accent",
                "mx-3 h-[2px] w-6",
              )}
            ></button>
          ))}
        </div>
      </div>
    </Carousel>
  );
}
