import type { MDXComponents } from "mdx/types";

import BasicSubjectInfo from "./components/documents/basic-subject-info";
import {
  BasicDocumentList,
  BasicSubjectDocumentList,
  DocumentList,
  SubjectDocumentList,
} from "./components/documents/list";
import ExamsInfo from "./components/exams/info";
import SummaryList from "./components/summaries/list";
import { Schnellzugriff, SchnellzugriffLink } from "./components/rwth/schnellzugriff";

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
  };
}
