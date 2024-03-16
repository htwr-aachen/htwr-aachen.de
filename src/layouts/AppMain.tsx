// "use client";

import type { FC, ReactNode } from "react";

import { PushNotifyProvider } from "./SharedPushNotify";

type AppMainProps = {
  children: ReactNode;
};

const AppMain: FC<AppMainProps> = ({ children }) => {
  // const pathname = usePathname();

  return (
    <>
      <PushNotifyProvider>
        <main>{children}</main>
      </PushNotifyProvider>
      {/* <CommentSection key={pathname} /> */}
    </>
  );
};

export default AppMain;
