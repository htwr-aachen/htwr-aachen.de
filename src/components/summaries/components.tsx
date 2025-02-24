import Link from "next/link";
import { HeadLine } from "../rwth/headline";
import Spoiler from "./components/spoiler";
import { ComponentProps } from "react";

export const DefaultSummaryComponents = {
  Spoiler,

  img: (props: ComponentProps<"img">) => {
    return <img {...props} loading="lazy" className="centerImg" alt="" />;
  },
  a: (props: ComponentProps<typeof Link>) => {
    return <Link {...props} rel="noopener noreferrer" passHref />;
  },
  h1: (props: ComponentProps<typeof HeadLine>) => (
    <HeadLine>{props.children}</HeadLine>
  ),
};
