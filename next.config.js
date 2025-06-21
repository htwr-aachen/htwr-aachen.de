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

export default configuredBundleAnalyzer(
  withMDX({
    experimental: {
      mdxRs: true,
    },
    turbopack: {
      resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".mdx"],
    },
    transpilePackages: ["next-mdx-remote", "next-image-export-optimizer"],
    output: "export",
    images: {
      loader: "custom",
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    env: {
      nextImageExportOptimizer_imageFolderPath: "public",
      nextImageExportOptimizer_exportFolderPath: "out",
      nextImageExportOptimizer_quality: "75",
      nextImageExportOptimizer_storePicturesInWEBP: "true",
      nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
      nextImageExportOptimizer_generateAndUseBlurImages: "true",
      nextImageExportOptimizer_remoteImageCacheTTL: "0",
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
  }),
);
