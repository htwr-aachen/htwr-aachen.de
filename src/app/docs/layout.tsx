import "../../styles/simple.scss";

import Main from "@/layouts/Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main institute="htwr">
      <div>{children}</div>
    </Main>
  );
}
