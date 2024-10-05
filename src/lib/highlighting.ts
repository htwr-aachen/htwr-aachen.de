import { bundledLanguages, createHighlighter } from "shiki";

export const highlighter = await createHighlighter({
  themes: [
    import("shiki/themes/github-dark.mjs"),
    import("shiki/themes/github-light.mjs"),
  ],
  langs: Object.keys(bundledLanguages),
});
