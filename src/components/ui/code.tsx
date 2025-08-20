import { highlighter } from "@/lib/highlighting";

export const codeToHtml = async ({
	code,
	language,
}: {
	code: string;
	language: string;
}) => {
	return highlighter.codeToHtml(code, {
		lang: language,
		themes: {
			dark: "github-light",
			light: "github-dark",
		},
	});
};

export default async function Code({
	code,
	language,
}: {
	code: string;
	language: string;
}) {
	const html = await codeToHtml({ code, language });
	// biome-ignore lint/security/noDangerouslySetInnerHtml: this is safe
	return <div className="px-5" dangerouslySetInnerHTML={{ __html: html }} />;
}
