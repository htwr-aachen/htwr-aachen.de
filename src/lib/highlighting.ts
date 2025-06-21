import {
  BundledHighlighterOptions,
  BundledLanguage,
  BundledTheme,
  bundledLanguages,
  createHighlighter,
} from "shiki";

export const untypedHighlighterConfig = {
  themes: {
    light: "github-dark",
    dark: "github-light",
  },
};
export const highlighterConfig: BundledHighlighterOptions<
  BundledLanguage,
  BundledTheme
> = {
  themes: [
    import("shiki/themes/github-dark.mjs"),
    import("shiki/themes/github-light.mjs"),
  ],
  langs: Object.keys(bundledLanguages),
};
export const highlighter = await createHighlighter(highlighterConfig);
