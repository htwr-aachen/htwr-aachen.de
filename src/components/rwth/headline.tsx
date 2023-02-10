import type { FC } from "react";

type HeadLineProps = {
  title: string;
};

const HeadLine: FC<HeadLineProps> = ({ title }) => {
  return (
    <h1 className="border-b-4 border-black pb-6 font-sans text-[3.5rem] font-normal">
      {title}
    </h1>
  );
};

export { HeadLine };
