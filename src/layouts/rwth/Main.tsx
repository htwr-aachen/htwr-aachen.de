import { DefaultNavbar } from "@/app/navbar";
import { BlogBannerContent } from "@/components/banner";
import { BannerContent } from "@/components/banner-provider";
import { cn } from "@/lib/utils";

import type { LayoutProps, NavbarConfig } from "../../models/layout";
import Footer from "./Footer";
import Navbar from "./navbar";

type RWTHProps = {
  fullWidth?: boolean;
  navbar?: NavbarConfig;
  addPadding?: boolean;
};

type MainProps = LayoutProps & RWTHProps;

/**
 * The RWTH Layout component
 * @param props.institute - The institute to display and get configuration from
 * @param props.navbar - the navbar to display
 * @param fullWidth - if true does not add padding instead the content will take the whole width of the container
 * @param addPadding - whether to add vertical padding to the navbar. Defaults to `true`
 */
const Main = ({
  institute,
  navbar,
  fullWidth,
  addPadding = true,
  children,
}: MainProps) => {
  return (
    <div className={`${institute} relative bg-[#e5e5e5] text-black`}>
      <div className="min-h-screen w-full max-w-screen-xl lg:mx-auto">
        <Navbar config={navbar || DefaultNavbar} institute={institute} />
        <BannerContent>
          <BlogBannerContent />
        </BannerContent>
        <div className={cn("m-0 w-full bg-rwth-bg", addPadding && "py-12")}>
          <div className={`mx-auto w-full ${!fullWidth && "max-w-[980px]"}`}>
            {children}
          </div>
        </div>
        <Footer institute={institute} />
      </div>
    </div>
  );
};

export { Main };
