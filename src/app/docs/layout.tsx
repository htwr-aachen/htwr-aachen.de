import Main from "@/layouts/Main";
import "../../styles/simple.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main institute="htwr">
      <div>{children}</div>
    </Main>
  );
}
