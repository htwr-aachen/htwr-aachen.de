import { getHighlighter } from "shiki";
import { bundledLanguages } from "shiki/langs";

export const highlighter = await getHighlighter({
  themes: ["github-light", "github-dark"],
  langs: [...Object.keys(bundledLanguages)],
});
