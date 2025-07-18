import type { FC, ReactNode } from "react";

type HeadLineProps = {
  children?: ReactNode;
  title?: string;
};

const HeadLine: FC<HeadLineProps> = ({ title, children }) => {
  return (
    <h1 className="mb-6 pb-6 font-sans text-4xl font-bold lg:text-5xl">
      {title} {children}
    </h1>
  );
};

export { HeadLine };
