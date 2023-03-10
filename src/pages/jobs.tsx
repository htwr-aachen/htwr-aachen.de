import { HeadLine } from "@/components/rwth/headline";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/layouts/rwth/Main";

const Jobs = () => {
  return (
    <Main
      instituteName=""
      instituteTitle=""
      meta={<Meta title="Jobs @ HTWR" description="Jobs hier bei HTWR"></Meta>}
    >
      <HeadLine>Es gibt viel zu erledigen</HeadLine>
      <p>
        Falls du eine gute Idee hast, oder etwas korrigieren oder hinzufügen
        möchtest, mach einfach ein branch bzw. Fork von
        <a
          target={"_blank"}
          href="https://github.com/JohnnyS318/htwr-aachen.de"
        >
          {" "}
          github.com/JohnnyS318/htwr-aachen.de
        </a>{" "}
        und dann ein merge request.
      </p>
    </Main>
  );
};

export default Jobs;
