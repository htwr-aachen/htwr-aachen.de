import createMDX from "@next/mdx";
import mdxMermaid from "mdx-mermaid";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import remarkMath from "remark-math";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      remarkHint,
      [mdxMermaid, { output: "svg" }],
    ],
    rehypePlugins: [rehypeKatex, [rehypePrism, { plugins: ["line-numbers"] }]],
    format: "mdx",
  },
});

const configuredBundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default configuredBundleAnalyzer(
  withMDX({
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
