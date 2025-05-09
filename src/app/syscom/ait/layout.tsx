import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="prose mx-auto px-2 lg:max-w-[100ch] lg:px-0">
      {children}
    </div>
  );
}
