import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
  linkElements: [
    {
      name: "DBIS",
      href: "/sibd/dbis",
      links: [
        {
          name: "Klausuren",
          href: "/sibd/dbis/exams",
        },
        {
          name: "Material",
          href: "/sibd/dbis/materials",
        },
        {
          name: "Zusammenfassungen",
          href: "/sibd/dbis/summaries",
        },
      ],
    },
    {
      name: "Forschung",
      href: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "All**Gemein**es",
          href: "/nichts",
          path: "/nichts",
        },
        {
          name: "Publikationen",
          href: "/nichts",
          path: "/nichts",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      href: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "AllGemein",
          href: "/nichts",
          path: "/nichts",
        },
        { name: "Kontakt", href: "/contact", path: "" },
      ],
    },
  ],
  main: { name: "SIBD", href: "/sibd" },
  logo: {
    src: "/assets/sibd/sibd.png",
    alt: "SIBD Logo",
    href: "/sibd",
    width: 387,
    height: 110,
  },
};
