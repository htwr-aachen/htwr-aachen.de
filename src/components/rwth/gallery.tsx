import "react-responsive-carousel/lib/styles/carousel.min.css";

import type { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";
import type { FC, ReactChild, ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";

type GalleryImageProps = ImageProps;

const GalleryImage: FC<GalleryImageProps> = (props) => {
  return (
    <Image
      className="absolute inset-[-9999px] m-auto block h-auto w-full object-cover"
      {...props}
    ></Image>
  );
};

type GalleryItemProps = {
  children?: ReactNode;
};

const GalleryItem: FC<GalleryItemProps> = ({ children }) => {
  return <div className="relative h-[500px] overflow-hidden">{children}</div>;
};

type GalleryLabelProps = {
  children?: ReactNode;
  headline?: string;
  url?: string;
};

const GalleryLabel: FC<GalleryLabelProps> = ({ headline, children, url }) => {
  return (
    <div className="absolute bottom-0 w-full items-center justify-center lg:grid">
      <div className="grid w-full grid-rows-2 bg-rwth-accent px-8 py-6 font-sans text-white lg:mb-6 lg:w-[750px] lg:grid-cols-[auto_1fr] lg:grid-rows-1">
        <h2 className="pr-4 text-3xl font-medium lg:w-[300px]">{headline}</h2>
        <div className="grid">
          <p className="text-left text-sm font-normal">{children}</p>
          {url ? (
            <Link
              href={url}
              className="mt-2 justify-self-end rounded bg-black px-3 py-1 text-white hover:border-b-0 hover:bg-white hover:text-black lg:justify-self-start"
            >
              Mehr <span className="ml-4">&gt;</span>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

type GalleryProps = {
  children?: ReactNode;
};

const GalleryPrevArrow = (
  clickHandler: () => void,
  hasPrev: boolean,
  label: string
) => {
  if (!hasPrev) return <></>;
  return (
    <div className="absolute grid h-full items-center justify-start">
      <button
        onClick={clickHandler}
        className="relative z-10 bg-black/50 hover:bg-rwth-accent/100"
        type="button"
        aria-label={label}
      >
        <div className="relative p-4">
          <Image
            src={"/assets/rwth/ArrowPrev.svg"}
            alt="Arrow Next"
            width={50}
            height={50}
            className="h-[45px] w-[45] lg:h-[75px] lg:w-[75px]"
          />
        </div>
      </button>
    </div>
  );
};

const GalleryNextArrow = (
  clickHandler: () => void,
  hasNext: boolean,
  label: string
) => {
  if (!hasNext) return <></>;
  return (
    <div className="absolute top-0 right-0 grid h-full items-center justify-end">
      <button
        onClick={clickHandler}
        className="relative z-10 bg-black/50 hover:bg-rwth-accent/100"
        type="button"
        aria-label={label}
      >
        <div className="relative p-4">
          <Image
            src={"/assets/rwth/ArrowNext.svg"}
            alt="Arrow Next"
            width={50}
            height={50}
            className="h-[45px] w-[45] lg:h-[75px] lg:w-[75px]"
          />
        </div>
      </button>
    </div>
  );
};

const Gallery: FC<GalleryProps> = ({ children }) => {
  return (
    <Carousel
      renderArrowPrev={GalleryPrevArrow}
      renderArrowNext={GalleryNextArrow}
      infiniteLoop
      className="w-full"
      showIndicators={false}
      // autoPlay
      // interval={2500}
      showThumbs={false}
      dynamicHeight={false}
    >
      {children as ReactChild[]}
    </Carousel>
  );
};

export { Gallery, GalleryImage, GalleryItem, GalleryLabel };
