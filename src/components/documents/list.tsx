import { join } from "path";

import type { Subjects } from "@/config/subjects";
import { SubjectConfig } from "@/config/subjects";
import { includeLocalDocuments } from "@/lib/documents";
import urlJoin from "@/lib/url";
import {
	BaseDocumentList,
	type BaseDocumentListProps,
	BasicBaseDocumentList,
} from "./list-ui";

/**
 * A component to include local documents from this next server
 */
export async function DocumentList({
	path,
	...props
}: { path: string } & BaseDocumentListProps) {
	const collection = await includeLocalDocuments(
		path,
		urlJoin("/content-assets", path),
		true,
	);
	return <BaseDocumentList docs={collection} {...props}></BaseDocumentList>;
}
/**
 * A basic variant of the component to include local documents from this next server. This will come without headings & tree items
 */
export async function BasicDocumentList({
	path,
	...props
}: { path: string } & BaseDocumentListProps) {
	const collection = await includeLocalDocuments(
		path,
		urlJoin("/content-assets", path),
		true,
	);
	return (
		<BasicBaseDocumentList docs={collection} {...props}></BasicBaseDocumentList>
	);
}

/**
 * A convenience component to get the DocumentList with the subjects configured name and path
 * @param props.subject - the subject to show documents for
 * @param props.subpath - join/append this to the root dir of the path
 */
export async function SubjectDocumentList({
	subject,
	subpath = "",
	...props
}: {
	subject: Subjects;
	subpath?: string;
} & BaseDocumentListProps) {
	return (
		<DocumentList
			path={join(SubjectConfig[subject].name, subpath)}
			{...props}
		></DocumentList>
	);
}

/**
 * A basic variant of the convenience component to get the DocumentList with the subjects configured name and path. This will come without Headings and Tree items
 * @param props.subject - the subject to show documents for
 * @param props.subpath - join/append this to the root dir of the path
 */
export async function BasicSubjectDocumentList({
	subject,
	subpath = "",
	...props
}: {
	subject: Subjects;
	subpath?: string;
} & BaseDocumentListProps) {
	return (
		<BasicDocumentList
			path={join(SubjectConfig[subject].name, subpath)}
			{...props}
		></BasicDocumentList>
	);
}
