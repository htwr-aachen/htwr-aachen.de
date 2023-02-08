import type { FC } from "react";
import { useState } from "react";

type SpoilerProps = {
  children: React.ReactNode;
  title?: string;
};

const Spoiler: FC<SpoilerProps> = ({ children }) => {
  const [isSpoilerVisible, setSpoilerVisible] = useState(false);

  return (
    <button
      type="button"
      className={`spoiler transition-all ${
        isSpoilerVisible
          ? "cursor-text select-text blur-0"
          : "blur-sm hover:scale-105"
      }`}
      onClick={() => setSpoilerVisible(true)}
    >
      {children}
    </button>
  );
};

export default Spoiler;
