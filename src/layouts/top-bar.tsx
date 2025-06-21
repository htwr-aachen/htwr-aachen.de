import Link from "next/link";

import { QuickAccess } from "@/components/rwth/quick-access";
import { TopBarCond } from "./top-bar-con";
import { BlogBannerContent } from "@/components/banner";
import { BannerClose } from "@/components/banner-provider";

export function TopBar() {
  return (
    <TopBarCond>
      <Link
        href="/"
        className="no-b flex h-16 items-center justify-start font-bold text-inherit"
      >
        HTWR Home
      </Link>
      <QuickAccess />
      <div className="col-span-2 grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-3 overflow-hidden overflow-ellipsis md:col-span-1 md:grid-cols-[1fr_auto_auto] md:justify-self-end">
        <div></div>
        <BlogBannerContent />
        <BannerClose className="bg-cms-accent/50 text-cms-accent-text h-fit max-h-16 w-32 cursor-pointer rounded px-3 py-2">
          Nerv nicht
        </BannerClose>
      </div>
    </TopBarCond>
  );
}
