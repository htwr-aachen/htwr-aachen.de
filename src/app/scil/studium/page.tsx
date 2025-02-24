import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";

import { SCILSchnellzugriff } from "../schnellzugriff";

export const metadata: Metadata = {
  title: "Studium",
  description: "Studium für BuK und anderes",
  alternates: {
    canonical: "/scil/studium",
  },
};

export default function Page() {
  return (
    <div>
      <HeadLine title="Studium" />
      <p className="my-4">Jaja hier kommt bald was für BuK.</p>

      <div className="max-h-410">
        <SCILSchnellzugriff />
      </div>
    </div>
  );
}
