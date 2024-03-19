import "../../styles/simple.scss";

import Modern from "@/layouts/modern/layout";
import { DocsNav } from "./nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Modern nav={DocsNav} name="docs" prefix="docs">
      {children}
    </Modern>
  );
};

export default Layout;
