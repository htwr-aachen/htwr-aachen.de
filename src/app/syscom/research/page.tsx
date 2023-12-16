import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noch mehr nichts",
  alternates: {
    canonical: "/syscom/research",
  },
};

const Research = () => {
  return (
    <div>
      <h1>Leer :/</h1>
      <iframe
        allow="fullscreen"
        frameBorder="0"
        src="https://giphy.com/embed/B0qMsfOnowZWcFkWEj/video"
        width="480"
      ></iframe>
    </div>
  );
};

export default Research;
