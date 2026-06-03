// Ambient declaration for `*.mdx` imports.
//
// `@types/mdx` ships the same `declare module "*.mdx"` block, but its automatic
// inclusion is unreliable under our pnpm + TypeScript setup, which makes every
// `import Content from "./content.mdx"` fail type checking (TS2307). Declaring it
// explicitly here guarantees the module type is always in scope.
declare module "*.mdx" {
	import type { MDXProps } from "mdx/types";

	export default function MDXContent(props: MDXProps): JSX.Element;
}
