import type { FC, ReactNode } from "react";
import { useMemo } from "react";
import { Tooltip as BackendTooltip } from "react-tooltip";
import { v4 as uuidv4 } from "uuid";

type TooltipProps = {
  children: ReactNode;
  content: string;
  place?: "top" | "bottom" | "left" | "right";
};

const Tooltip: FC<TooltipProps> = ({ children, content, place = "bottom" }) => {
  const id = useMemo(() => {
    return uuidv4();
  }, []);
  return (
    <>
      <a
        className="no-b"
        data-tooltip-id={id}
        data-tooltip-content={content}
        data-tooltip-place={place}
      >
        {children}
      </a>
      <BackendTooltip id={id} />
    </>
  );
};

export { Tooltip };
