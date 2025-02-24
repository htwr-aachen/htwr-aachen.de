import { redirect, RedirectType } from "next/navigation";

import urlJoin from "@/lib/url";

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  if (!params.slug || params.slug.length === 0) {
    return redirect("/deddebme/psp", RedirectType.replace);
  }
  return redirect(
    urlJoin("/deddebme/psp", ...params.slug),
    RedirectType.replace
  );
}
