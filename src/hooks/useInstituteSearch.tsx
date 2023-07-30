import { useCallback, useState } from "react";

import { getRealInstitutes } from "@/lib/institutes";
import type { Institute } from "@/models/institutes";

const institutes = getRealInstitutes();

export function useInstituteSearch(
  initial?: Institute[]
): [Institute[], (query: string) => void] {
  const [current, setCurrent] = useState<Institute[]>(initial || []);

  const search = useCallback(
    (query: string) => {
      if (query.length === 0) {
        setCurrent(initial || []);
        return;
      }

      // hacky way to do this but a full-text search engine is overkill and way to big here
      const results = institutes.filter((institute) => {
        const name = institute.name.toLowerCase();
        const queryLower = query.toLowerCase();
        const nameSearch = name.includes(queryLower);
        const fullNameSearch = institute.fullName
          ?.toLowerCase()
          .includes(queryLower);
        const subjectSearch = institute.subject
          ?.toLowerCase()
          .includes(queryLower);
        const professorSearch = institute.professor
          ?.toLowerCase()
          .includes(queryLower);
        return nameSearch || fullNameSearch || subjectSearch || professorSearch;
      });

      setCurrent(results);
    },
    [institutes]
  );

  return [current, search];
}
