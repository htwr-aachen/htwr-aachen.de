import type { FC } from "react";
import { useEffect, useRef } from "react";

const CommentSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current?.children || ref.current?.children.length > 0) return;
    const scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.crossOrigin = "anonymous";
    scriptElement.src = "https://utteranc.es/client.js";

    scriptElement.setAttribute("issue-term", "pathname");
    scriptElement.setAttribute("label", "comment");
    scriptElement.setAttribute("repo", "jonsch318/htwr-aachen.de");
    scriptElement.setAttribute("theme", "github-light");

    ref.current?.appendChild(scriptElement);
  }, []);

  return (
    <div className="comments mx-auto my-6 rounded-3xl border-1 shadow-md lg:max-w-[75%]">
      <h1 className="my-3 mt-0 rounded-3xl border-b-1 border-black/20 bg-gray-500/5 pb-2 pt-4 text-center align-middle font-sans text-3xl font-medium shadow-md">
        Kommentare zu dieser Seite (mit Github-Account)
      </h1>
      <div ref={ref} />
    </div>
  );
};

export default CommentSection;
