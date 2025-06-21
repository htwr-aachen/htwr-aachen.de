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
      href: "/nichts?path=/sibd/forschung",
      path: "/nichts",
      links: [
        {
          name: "All**Gemein**es",
          href: "/nichts?path=/sibd/forschung/allgemeines",
          path: "/nichts",
        },
        {
          name: "Publikationen",
          href: "/nichts?path=/sibd/forschung/publikationen",
          path: "/nichts",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      href: "/nichts?path=/sibd/lehrstuhl",
      path: "/nichts",
      links: [{ name: "Kontakt", href: "/contact", path: "" }],
    },
  ],
  main: { name: "SIBD", href: "/sibd" },
  logo: {
    src: "/assets/sibd/sibd_cropped.png",
    alt: "SIBD Logo",
    href: "/sibd",
    width: 387,
    height: 110,
  },
};
