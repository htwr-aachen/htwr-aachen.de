import type { Metadata } from "next";
import { Suspense } from "react";

import { HeadLine } from "@/components/rwth/headline";
import { Main } from "@/layouts/rwth/Main";

import { ProtectedDownloadFlow } from "./protected-download";

export const metadata: Metadata = {
  title: "StudiCaptcha",
  alternates: {
    canonical: "/protected/download",
  },
  robots: "noindex",
  description:
    "A smart captcha to proof that you are realy a propper RWTH computer scientist",
};

export default function Page() {
  return (
    <Main institute="htwr">
      <div className="">
        <HeadLine>Captcha: Bist Du Ein Student?</HeadLine>
        <Suspense fallback={<span>Loading...</span>}>
          <ProtectedDownloadFlow />
        </Suspense>
      </div>
    </Main>
  );
}
