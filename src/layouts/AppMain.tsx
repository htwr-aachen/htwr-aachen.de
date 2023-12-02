"use client";

import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";

import CommentSection from "@/components/CommentSection";

type AppMainProps = {
  children: ReactNode;
};

const AppMain: FC<AppMainProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <div>{children}</div>
      <CommentSection key={pathname} />
    </>
  );
};

export default AppMain;
