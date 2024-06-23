import { SubjectList } from "@/components/subject-list";
import Code from "@/components/ui/code";

import { subjects } from "./config";

export default function Page() {
  return (
    <div>
      <h1>Deddebme / Embedded</h1>

      <Code
        code={`#include<stdio.h>

int main() {
  printf("Hello World\\n");
  return 0;
}`}
        language="c"
      />

      <SubjectList subjects={subjects} />
    </div>
  );
}
