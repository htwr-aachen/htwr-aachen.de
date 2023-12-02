import { getAllTeachings } from "@/lib/teachings";

import { TeachingsDirectory } from "./teachingConfig";

const docs = getAllTeachings(TeachingsDirectory);

export default function TeachingsPage() {
  return (
    <div>
      <h1>Teachings</h1>
    </div>
  );
}
