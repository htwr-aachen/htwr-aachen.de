import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="prose mx-auto max-w-[100ch]">{children}</div>;
}
