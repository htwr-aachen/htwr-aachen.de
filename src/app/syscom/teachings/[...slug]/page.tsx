import { redirect } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  redirect(`/syscom/studium/teachings/${params.slug.join("/")}`);
}
