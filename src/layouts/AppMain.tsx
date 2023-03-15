import type { FC, ReactNode } from "react";
import { useEffect, useRef } from "react";

type AppMainProps = {
  children: ReactNode;
};

const AppMain: FC<AppMainProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.crossOrigin = "anonymous";
    scriptElement.src = "https://utteranc.es/client.js";

    scriptElement.setAttribute("issue-term", "pathname");
    scriptElement.setAttribute("label", "comment");
    scriptElement.setAttribute("repo", "johnnys318/htwr-aachen.de");
    scriptElement.setAttribute("theme", "github-dark");

    ref.current?.appendChild(scriptElement);
  }, []);

  return (
    <>
      <div>{children}</div>
      <div className="comments">
        <div ref={ref} />
      </div>
    </>
  );
};

export default AppMain;
