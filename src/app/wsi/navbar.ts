import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
  linkElements: [
    {
      name: "⚠Studium",
      href: "/wsi/studium",
      path: "/studium",
      links: [
        {
          name: "Klausuren",
          href: "/wsi/studium/klausuren",
          path: "studium/klausuren",
        },
        {
          name: "Aufgaben",
          href: "/wsi/studium/aufgaben",
          path: "studium/aufgaben",
        },
        {
          name: "Zusammenfassungen",
          href: "/wsi/studium/teachings",
          path: "studium/teachings",
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
  main: { name: "WSI", href: "/wsi" },
  logo: {
    src: "/assets/wsi/wsi.jpg",
    alt: "WSI Logo",
    href: "/wsi",
    width: 387,
    height: 110,
  },
};
