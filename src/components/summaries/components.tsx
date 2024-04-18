import { Link } from "lucide-react";

import { HeadLine } from "../rwth/headline";
import Spoiler from "./components/spoiler";

export const DefaultSummaryComponents = {
  Spoiler,

  img: (props: any) => {
    return <img {...props} loading="lazy" className="centerImg" alt="" />;
  },
  a: (props: any) => {
    return <Link {...props} rel="noopener noreferrer" passHref />;
  },
  h1: (props: any) => <HeadLine>{props.children}</HeadLine>,
};
