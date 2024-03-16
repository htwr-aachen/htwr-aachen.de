// HTWR-Modern layout navbar.
// This will be used when displaying content that is not directly related to RWTH or its chairs/institues (docs, blog,...)

export type NavLink = {
  // the link content
  content: string;
  // the href of the link
  href: string;
  // the prefix to check whether the link is active
  // this is not a absolute prefix. The Layout itself keeps a prefix which are templated layoutPrefix/linkPrefix
  prefix?: string;
};

export function Nav() {}
