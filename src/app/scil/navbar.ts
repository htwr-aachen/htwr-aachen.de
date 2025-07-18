import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
  linkElements: [
    {
      name: "SCIL Home",
      href: "/scil",
      path: "/scil",
    },
    {
      name: "BuK",
      href: "/scil/buk",
      path: "/scil/buk",
      links: [
        {
          name: "Zusammenfassungen",
          href: "/scil/buk/summaries",
          path: "/scil/buk/teachings",
        },
        {
          name: "Aufgaben",
          href: "/scil/buk/materials",
          path: "/scil/buk/materials",
        },
      ],
    },
    {
      name: "MALO",
      href: "/cigol",
      path: "/cigol",
      links: [
        {
          name: "Zusammenfassungen",
          href: "/cigol/malo/summaries",
          path: "/cigol/malo/summaries",
        },
        {
          name: "Aufgaben",
          href: "/cigol/malo/materials",
          path: "/cigol/malo/materials",
        },
      ],
    },
  ],
  main: { name: "SCIL", href: "/scil" },
  logo: {
    src: "/assets/scil/scil.svg",
    alt: "SCIL Logo",
    href: "/scil",
    width: 387,
    height: 110,
  },
};
