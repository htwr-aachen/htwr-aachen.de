import type { MDXComponents } from "mdx/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import BasicSubjectInfo from "./components/documents/basic-subject-info";
import {
	BasicDocumentList,
	BasicSubjectDocumentList,
	DocumentList,
	SubjectDocumentList,
} from "./components/documents/list";
import ExamsInfo from "./components/exams/info";
import {
	Schnellzugriff,
	SchnellzugriffLink,
} from "./components/rwth/schnellzugriff";
import SummaryList from "./components/summaries/list";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		BasicSubjectInfo,
		DocumentList,
		BasicDocumentList,
		SubjectDocumentList,
		BasicSubjectDocumentList,
		SummaryList,
		ExamsInfo,
		Schnellzugriff,
		SchnellzugriffLink,
		Alert,
		AlertDescription,
		AlertTitle,
	};
}
