"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-rwth-warn hover:bg-rwth-warn2 rounded px-6 py-3 transition-colors"
        type="button"
        onClick={() => router.back()}
      >
        Klicke hier um zurück zu kommen.
      </button>
    </div>
  );
}
