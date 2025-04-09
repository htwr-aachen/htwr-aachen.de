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

const nextConfig = configuredBundleAnalyzer(
  withMDX({
    experimental: {
      turbo: {
        resolveExtensions: [".tsx", ".ts", ".jsx", ".js"],
      },
      mdxRs: true,
    },
    transpilePackages: ["next-mdx-remote"],
    images: {
      loader: "custom",
      loaderFile: "./image-loader.ts",
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
    poweredByHeader: false,
    async rewrites() {
      return [
        {
          // I want to have the htwr-aachen.de/panikzettel/{subject} route visible and we proxy the request to the api server
          source: "/panikzettel/:path",
          destination: "https://api.htwr-aachen.de/panikzettel/:path",
        },
      ];
    },
  }),
);

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
