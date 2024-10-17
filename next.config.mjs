import withBundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { bundledLanguages, createHighlighter } from "shiki";

export const highlighter = await createHighlighter({
  themes: [
    import("shiki/themes/github-dark.mjs"),
    import("shiki/themes/github-light.mjs"),
  ],
  langs: Object.keys(bundledLanguages),
});

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkGfm, remarkHint],
    rehypePlugins: [
      rehypeKatex,
      [
        // @ts-ignore
        rehypeShikiFromHighlighter,
        highlighter,
        {
          themes: {
            light: "github-dark",
            dark: "github-light",
          },
        },
      ],
    ],
    format: "mdx",
  },
});

const configuredBundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default configuredBundleAnalyzer(
  withMDX({
    experimental: {
      turbo: {
        resolveExtensions: [".tsx", ".ts", ".jsx", ".js"],
      },
      mdxRs: true,
    },
    transpilePackages: ["next-mdx-remote"],
    output: "standalone",
    eslint: {
      dirs: ["."],
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    poweredByHeader: false,
    trailingSlash: true,
    basePath: "",
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          // I want to have the htwr-aachen.de/panikzettel/{subject} route visible and we proxy the request to the api server
          source: "/panikzettel/:path",
          destination: "https://api.htwr-aachen.de/panikzettel/:path",
        },
      ];
    },
  })
);
