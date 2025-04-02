import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";

import { SubjectList } from "@/components/subject-list";
import { subjects } from "./config";

export const metadata: Metadata = {
  description: "The chair for security or it but not both",
  alternates: {
    canonical: "/cesti",
  },
};

export default function Page() {
  return (
    <div>
      <HeadLine>Cesti</HeadLine>

      <SubjectList subjects={subjects} />
    </div>
  );
}
