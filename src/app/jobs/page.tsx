import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Jobs hier bei HTWR",
};

const Jobs = () => {
  return (
    <Main institute="htwr">
      <HeadLine>Es gibt viel zu erledigen</HeadLine>
      <p>
        Falls du eine gute Idee hast, oder etwas korrigieren oder hinzufügen
        möchtest, mach einfach ein branch bzw. Fork von
        <a target={"_blank"} href="https://github.com/jonsch318/htwr-aachen.de">
          {" "}
          github.com/jonsch318/htwr-aachen.de
        </a>{" "}
        und dann ein merge request.
      </p>
    </Main>
  );
};

export default Jobs;
