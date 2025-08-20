import type { Plugin } from "unified";
import type { Data, Node, Parent } from "unist";
import { u } from "unist-builder";

// Define specific node types for better type safety
interface TextNode extends Node {
	type: "text";
	value: string;
}

interface ParagraphNode extends Parent {
	type: "paragraph";
	children: Node[];
	data?: Data & {
		class?: string;
		hProperties?: {
			class?: string;
		};
	};
}

interface HintClassNames {
	readonly [key: string]: RegExp;
}

const HINT_CLASS_NAMES: HintClassNames = {
	"hint tip": /^!&gt;|!>\s/,
	"hint warn": /^\?&gt;|\?>\s/,
	"hint error": /^x&gt;|x>\s/,
} as const;

// Generic map function with proper typing
const mapTree = <T extends Node>(
	tree: T,
	iteratee: (node: Node, index: number | null, parent: Parent | null) => Node,
): T => {
	const preorder = (
		node: Node,
		index: number | null,
		parent: Parent | null,
	): Node => {
		const newNode = iteratee(node, index, parent);

		if ("children" in newNode && Array.isArray(newNode.children)) {
			const parentNode = newNode as Parent;
			parentNode.children = parentNode.children.map((child, childIndex) =>
				preorder(child, childIndex, parentNode),
			);
		}

		return newNode;
	};

	return preorder(tree, null, null) as T;
};

// Type guard to check if a node is a text node
const isTextNode = (node: Node): node is TextNode => {
	return node.type === "text" && typeof (node as TextNode).value === "string";
};

// Type guard to check if a node is a paragraph node
const isParagraphNode = (node: Node): node is ParagraphNode => {
	return (
		node.type === "paragraph" &&
		"children" in node &&
		Array.isArray((node as Parent).children)
	);
};

// Find matching class name and regex for a given text value
const findMatchingHintClass = (value: string): [string, RegExp] | null => {
	for (const [className, regex] of Object.entries(HINT_CLASS_NAMES)) {
		if (regex.test(value)) {
			return [className, regex];
		}
	}
	return null;
};

// Main plugin function
const customRemarkHint: Plugin<[], Node, Node> = () => {
	return (tree: Node): Node => {
		return mapTree(tree, (node: Node) => {
			if (!isParagraphNode(node)) {
				return node;
			}

			const [firstChild, ...siblings] = node.children;

			if (!firstChild || !isTextNode(firstChild)) {
				return node;
			}

			const match = findMatchingHintClass(firstChild.value);
			if (!match) {
				return node;
			}

			const [className, regex] = match;

			const newTextNode: TextNode = {
				type: "text",
				value: firstChild.value.replace(regex, ""),
			};

			return u(
				"paragraph",
				{
					data: {
						class: className,
						hProperties: {
							class: className,
						},
					},
				},
				[newTextNode, ...siblings],
			) as ParagraphNode;
		});
	};
};

export default customRemarkHint;
