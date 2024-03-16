import Modern from "@/layouts/modern/layout";
import "../../styles/simple.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Modern name="docs" prefix="docs">
      {children}
    </Modern>
  );
}
