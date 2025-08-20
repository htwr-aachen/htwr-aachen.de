export async function onRequestGet(ctx) {
	const path = new URL(ctx.request.url).pathname.replace(
		"/content-assets/",
		"",
	);
	const file = await ctx.env.CONTENT_ASSETS.get(path);
	if (!file) return new Response(null, { status: 404 });
	return new Response(file.body, {
		headers: { "Content-Type": file.httpMetadata.contentType },
	});
}
