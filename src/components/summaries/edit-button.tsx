"use client";

import { useEditPageLink } from "@/lib/sources";

export function EditSummary() {
	const editLink = useEditPageLink();

	return <a href={editLink.toString()}>Bearbeiten</a>;
}
