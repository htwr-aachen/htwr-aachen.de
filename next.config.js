/* eslint-disable import/no-extraneous-dependencies */
const { withAxiom } = require("next-axiom");

const rehypePrism = import("rehype-prism-plus");
const rehypeKatex = import("rehype-katex");
const remarkGfm = import("remark-gfm");
const remarkHint = import("remark-hint");
const remarkMath = import("remark-math");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkGfm, remarkHint],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});

module.exports = withAxiom(
  withBundleAnalyzer(
    withMDX({
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
      compiler: {
        swcMinify: true,
      }
    })
  )
);
