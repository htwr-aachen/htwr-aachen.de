import type { HTMLProps, MouseEventHandler, ReactNode } from "react";
import { forwardRef, useId } from "react";
import { Tooltip as BackendTooltip } from "react-tooltip";

type TooltipProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  children: ReactNode;
  content: string;
  place?: "top" | "bottom" | "left" | "right";
} & HTMLProps<HTMLAnchorElement>;

const Tooltip = forwardRef<HTMLAnchorElement, TooltipProps>(
  ({ children, content, href, onClick, place, ...rest }, ref) => {
    const id = useId();

    return (
      <>
        <a
          href={href}
          onClick={onClick}
          ref={ref}
          className="no-b"
          data-tooltip-id={id}
          data-tooltip-content={content}
          data-tooltip-place={place}
          {...rest}
        >
          {children}
        </a>
        <BackendTooltip id={id} />
      </>
    );
  }
);

Tooltip.displayName = "CustomTooltip";
export { Tooltip };
