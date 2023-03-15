import type { FC, ReactNode } from "react";
import { useEffect, useRef } from "react";

type AppMainProps = {
  children: ReactNode;
};

const AppMain: FC<AppMainProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current?.children || ref.current?.children.length > 0) return;
    const scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.crossOrigin = "anonymous";
    scriptElement.src = "https://utteranc.es/client.js";

    scriptElement.setAttribute("issue-term", "pathname");
    scriptElement.setAttribute("label", "comment");
    scriptElement.setAttribute("repo", "johnnys318/htwr-aachen.de");
    scriptElement.setAttribute("theme", "github-light");

    ref.current?.appendChild(scriptElement);
  }, []);

  return (
    <>
      <div>{children}</div>
      <div className="comments mx-auto my-4 rounded-lg border-1 shadow-md lg:max-w-[75%]">
        <h1 className="my-3 mt-0 rounded-t-lg border-b-1 border-black/30 bg-gray-500/5 pb-2 pt-4 text-center align-middle font-sans text-3xl font-medium">
          Kommentare zu dieser Seite
        </h1>
        <div ref={ref} />
      </div>
    </>
  );
};

export default AppMain;
