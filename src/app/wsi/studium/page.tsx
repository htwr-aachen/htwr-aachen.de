import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";

import { MaterialienSchnellzugriff } from "../Schnellzugriff";

export const metadata: Metadata = {
  title: "Studium",
  description: "Diskret oder?",
};

export default function StudiumPage() {
  return (
    <div>
      <HeadLine>Studium</HeadLine>
      <p className="my-4">
        Einführung in die Stochastik ist so ein Fach, dass ist nicht besonders
        schwer und nicht besonders leicht, deswegen mag man es nicht.
      </p>
      <MaterialienSchnellzugriff />
    </div>
  );
}
