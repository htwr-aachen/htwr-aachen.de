"use client";

import type { FC } from "react";
import { useState } from "react";

type SpoilerProps = {
  children: React.ReactNode;
  title?: string;
  blur?: number;
};

const Spoiler: FC<SpoilerProps> = ({ children }) => {
  const [isSpoilerVisible, setSpoilerVisible] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        className={`spoiler w-full text-left transition-all ${
          isSpoilerVisible
            ? "cursor-text select-text blur-0"
            : "hover:scale-105"
        }`}
        style={{ filter: isSpoilerVisible ? "blur(0)" : `blur-sm` }}
        onClick={() => setSpoilerVisible(true)}
      >
        {children}
      </button>
    </div>
  );
};

export default Spoiler;
