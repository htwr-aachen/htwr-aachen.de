/* eslint-disable import/no-extraneous-dependencies */
const { withAxiom } = require("next-axiom");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: ["rehype-katex", "@mapbox/rehype-prism"],
  },
});

module.exports = withAxiom(
  withBundleAnalyzer(
    withMDX({
      eslint: {
        dirs: ["."],
      },
      poweredByHeader: false,
      trailingSlash: true,
      basePath: "",
      // The starter code load resources from `public` folder with `router.basePath` in React components.
      // So, the source code is "basePath-ready".
      // You can remove `basePath` if you don't need it.
      reactStrictMode: true,
    })
  )
);
