import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { slug: string[] } }) {
  redirect(`/syscom/studium/teachings/${params.slug.join("/")}`);
}
