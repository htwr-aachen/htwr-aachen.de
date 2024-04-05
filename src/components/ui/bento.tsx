import Link from "next/link";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 text-card-foreground rounded-xl group/bento hover:shadow-2xl shadow-card-foreground/5 transition duration-200 p-4 bg-card border-card-foreground/10 border shadow justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export const BentoGridLink = ({
  className,
  title,
  description,
  header,
  icon,
  href,
  passHref,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
  passHref?: boolean;
}) => {
  return (
    <Link
      href={href}
      passHref={passHref === undefined ? true : passHref}
      className={cn(
        "no-b row-span-1 text-card-foreground rounded-xl group/bento hover:shadow-2xl shadow-card-foreground/5 transition duration-200 p-4 bg-card border-card-foreground/10 border shadow justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="my-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </Link>
  );
};
