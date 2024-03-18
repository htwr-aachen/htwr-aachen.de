import "../../styles/simple.scss";

import Modern from "@/layouts/modern/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Modern name="docs" prefix="docs">
      {children}
    </Modern>
  );
}
