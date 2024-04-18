import type { MDXComponents } from "mdx/types";

import BasicSubjectInfo from "./components/documents/basic-subject-info";
import { DocumentList, SubjectDocumentList } from "./components/documents/list";
import ExamsInfo from "./components/exams/info";
import SummaryList from "./components/summaries/list";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    BasicSubjectInfo,
    DocumentList,
    SubjectDocumentList,
    SummaryList,
    ExamsInfo,
  };
}
