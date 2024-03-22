// "use client";

import type { FC, ReactNode } from "react";

import FacultiesNav from "./faculties-nav";
import { PushNotifyProvider } from "./SharedPushNotify";

type AppMainProps = {
  children: ReactNode;
};

const AppMain: FC<AppMainProps> = ({ children }) => {
  // const pathname = usePathname();

  return (
    <>
      <PushNotifyProvider>
        <main className="min-h-screen">
          <FacultiesNav>{children}</FacultiesNav>
        </main>
      </PushNotifyProvider>
      {/* <CommentSection key={pathname} /> */}
    </>
  );
};

export default AppMain;
