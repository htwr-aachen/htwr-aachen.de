import type { NavbarConfig } from "@/models/layout";

export const DefaultNavbar: NavbarConfig = {
  linkElements: [
    {
      name: "Blog",
      href: "/blog",
      path: "/blog",
    },
    {
      name: "Panikzettel",
      href: "/panikzettel",
      path: "/panikzettel",
    },
    {
      name: "Mithelfen",
      href: "/docs",
      path: "/docs",
    },
  ],
  main: { name: "HTWR", href: "/" },
  logo: {
    src: "/assets/rwth/htwr_banner.png",
    alt: "HTWR Logo",
    href: "/",
  },
};
