"use client";

import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";

import CommentSection from "@/components/CommentSection";

import { PushNotifyProvider } from "./SharedPushNotify";

type AppMainProps = {
  children: ReactNode;
};

const AppMain: FC<AppMainProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <PushNotifyProvider>
        <div>{children}</div>
      </PushNotifyProvider>
      <CommentSection key={pathname} />
    </>
  );
};

export default AppMain;
