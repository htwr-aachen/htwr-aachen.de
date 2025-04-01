import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
  linkElements: [
    {
      name: "⚠Studium",
      href: "/scil/studium",
      path: "/studium",
      links: [
        {
          name: "Klausuren",
          href: "/scil/studium/klausuren",
          path: "studium/klausuren",
        },
        {
          name: "Aufgaben",
          href: "/scil/studium/aufgaben",
          path: "studium/aufgaben",
        },
        {
          name: "Zusammenfassungen",
          href: "/scil/studium/teachings",
          path: "studium/teachings",
        },
      ],
    },
    {
      name: "Forschung",
      href: "/nichts?path=/scil/forschung",
      path: "/nichts",
      links: [
        {
          name: "All**Gemein**es",
          href: "/nichts?path=/scil/forschung/allgemeines",
          path: "/nichts",
        },
        {
          name: "Publikationen",
          href: "/nichts?path=/scil/forschung/publikationen",
          path: "/nichts",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      href: "/nichts?path=/scil/lehrstuhl",
      path: "/nichts",
      links: [{ name: "Kontakt", href: "/contact", path: "" }],
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
