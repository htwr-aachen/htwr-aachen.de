"use client";

import Link from "next/link";

export type NavLinkProps = {
  // the link content
  content: string;
  // the href of the link
  href: string;
  // the prefix to check whether the link is active
  // this is not a absolute prefix. The Layout itself keeps a prefix which are templated layoutPrefix/linkPrefix
  prefix?: string;
};

export function NavLink(props: NavLinkProps) {
  // const isActive = useIsActive(props.prefix);
  return (
    <Link href={props.href} className="">
      {props.content}
    </Link>
  );
}
