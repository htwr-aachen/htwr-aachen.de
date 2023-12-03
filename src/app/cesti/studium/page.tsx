import { HeadLine } from "@/components/rwth/headline";
import { TeachingList } from "@/components/teachings/List";
import Main from "@/layouts/Main";
import { getTeachings } from "@/lib/teachings-next";

export default async function Page() {
  const teachings = await getTeachings("cesti");
  return (
    <Main institute="cesti">
      <HeadLine>Studium</HeadLine>
      <TeachingList
        teachingList={teachings}
        urlPrefix="/cesti/studium/teachings"
      />
    </Main>
  );
}
