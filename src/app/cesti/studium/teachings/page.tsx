import { TeachingList } from "@/components/teachings/List";
import Main from "@/layouts/Main";
import { getTeachings } from "@/lib/teachings-next";

export default async function Teachings() {
  const teachings = await getTeachings("cesti");

  return (
    <Main institute="cesti">
      <TeachingList
        urlPrefix="/cesti/studium/teachings"
        teachingList={teachings}
      />
    </Main>
  );
}
