import type { Metadata } from "next";

import SchedulerPage from "./scheduler";

export const metadata: Metadata = {
  title: "Scheduler Recovery Lösen",
  description: "DBIS (Klausur) Scheduler Aufgaben lösen",
  alternates: {
    canonical: "/sibd/scheduler",
  },
};

export default function Page() {
  return <SchedulerPage />;
}
