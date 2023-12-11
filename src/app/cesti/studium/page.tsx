import { HeadLine } from "@/components/rwth/headline";
import TeachingList from "@/components/teachings/List";

export default async function Page() {
  return (
    <div>
      <HeadLine>Studium</HeadLine>
      <TeachingList subject="itsec" />
    </div>
  );
}
