import type { Institute, NavbarConfig } from "@/models/layout";

export const institutes: Institute[] = [
  {
    href: "/scil",
    name: "SCIL",
    subject: "BUK",
    professor: "Grohe",
    fullName: "Theorie und Logik Systeme diskreter",
    icon: "/assets/scil/scil_icon.svg",
  },
  {
    href: "syscom",
    name: "SYSCOM",
    fullName: "Systems Distributed & Communication",
    professor: "Wehrle",
    subject: "DATCOM",
    icon: "/assets/syscom/syscom_icon.svg",
  },
  {
    href: "es",
    name: "ES",
    fullName: "Engineering Software",
    subject: "SWT",
    professor: "Rumpe",
    icon: "/assets/es/es_icon.svg",
  },
  {
    href: "cigol",
    name: "CIGOL",
    fullName: "Informatische Grundlagen der Mathematik",
    subject: "MALO",
    professor: "Grädel",
    icon: "/assets/cigol/cigol_icon.svg",
  },
];

export const SCILNavbarConfig: NavbarConfig = {
  linkElements: [
    {
      name: "Studium",
      url: "/scil/studium",
      path: "/studium",
      links: [
        {
          name: "Klausuren",
          url: "/scil/studium/klausuren",
          path: "studium/klausuren",
        },
        {
          name: "Aufgaben",
          url: "/scil/studium/aufgaben",
          path: "studium/aufgaben",
        },
        {
          name: "Zusammenfassungen",
          url: "/scil/studium/teachings",
          path: "studium/teachings",
        },
      ],
    },
    {
      name: "Forschung",
      url: "/scil/forschung",
      path: "/forschung",
      links: [
        {
          name: "All**Gemein**es",
          url: "/scil/forschung/allgemeines",
          path: "forschung/allgemeines",
        },
        {
          name: "Publikationen",
          url: "/scil/forschung/publikationen",
          path: "forschung/publikationen",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      url: "/scil/lehrstuhl",
      path: "/lehrstuhl",
      links: [
        {
          name: "AllGemein",
          url: "/scil/lehrstuhl/allgemein",
          path: "lehrstuhl/allgemein",
        },
        { name: "Kontakt", url: "/contact", path: "" },
      ],
    },
  ],
  main: { name: "SCIL", url: "/scil" },
  logo: {
    logoUrl: "/assets/scil/scil.svg",
    alt: "SCIL Logo",
    href: "/scil",
    width: 387,
    height: 110,
  },
};
