import type { Metadata } from "next";

import { HeadLine } from "@/components/rwth/headline";

export const metadata: Metadata = {
  description: "The chair for security or it but not both",
  alternates: {
    canonical: "/cesti",
  },
};

export default function Page() {
  return (
    <div>
      <HeadLine>Wird gerade vorbereitet...</HeadLine>
    </div>
  );
}
