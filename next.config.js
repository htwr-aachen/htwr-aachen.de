import withBundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-math", "remark-gfm", "remark-hint"],
    rehypePlugins: [
      "rehype-katex",
      [
        "@shikijs/rehype",
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
    experimental: {},
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
