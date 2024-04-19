import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
  logo: {
    src: "/assets/cesti/banner.svg",
    alt: "CESTI Logo",
    href: "/cesti",
    width: 380,
    height: 110,
  },
  main: {
    name: "CESTI",
    href: "/cesti",
  },
  linkElements: [
    {
      name: "⚠Studium",
      href: "/cesti/studium",
      path: "/studium",
      links: [
        {
          name: "Zusammenfassungen",
          href: "/cesti/studium/teachings",
        },
        {
          name: "Resourcen",
          href: "/cesti/studium/resources",
        },
        {
          name: "Klausuren",
          href: "/cesti/studium/klausuren",
        },
      ],
    },
    {
      name: "Forschung",
      href: "/cesti/studium",
    },
    {
      name: "Das Lehr- und Forschungsgebiet",
      href: "/nichts",
    },
  ],
};
