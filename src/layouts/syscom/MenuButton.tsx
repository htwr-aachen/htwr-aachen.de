import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useState } from "react";

type IMenuButtonProps = {
  href: string;
  src: string;
  src_hover?: string;
  alt: string;
  isActive?: boolean;
  name?: string;
};

const MenuButton = (props: IMenuButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <li
      className="mx-1 mt-8 md:mx-2"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <Link href={props.href} title={props.name}>
        {isHovering ? (
          <ExportedImage
            src={props.src_hover ? props.src_hover : props.src}
            alt={props.alt}
            width={64}
            height={64}
            className="aspect-square"
          />
        ) : (
          <ExportedImage
            src={props.src}
            alt={props.alt}
            width={64}
            height={64}
            className="aspect-square"
          />
        )}
      </Link>

      <Link href={props.href} title={props.name}>
        {isHovering ? (
          <span
            className="mt-2 block text-center text-xs text-blue-500"
            style={{ width: "70px" }}
          >
            {props.name}
          </span>
        ) : (
          <>
            {props.isActive ? (
              <span
                className="mt-2 block text-center text-xs text-black"
                style={{ width: "70px" }}
              >
                {props.name}
              </span>
            ) : (
              <></>
            )}
          </>
        )}
      </Link>
    </li>
  );
};

export { MenuButton };
