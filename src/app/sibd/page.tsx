import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";
import { SubjectList } from "@/components/subject-list";

import { subjects } from "./config";

export const metadata: Metadata = {
  description: "DBIS ist toll. Habt angst vor dem Fach",
  alternates: {
    canonical: "/sibd",
  },
};

export default function sibdPage() {
  return (
    <div>
      <HeadLine>SIBD :(</HeadLine>

      <SubjectList subjects={subjects} />
    </div>
  );
}
