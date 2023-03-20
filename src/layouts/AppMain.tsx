import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";

import CommentSection from "@/components/CommentSection";

type AppMainProps = {
  children: ReactNode;
};

const AppMain: FC<AppMainProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div>{children}</div>
      <CommentSection key={router.pathname} />
    </>
  );
};

export default AppMain;
