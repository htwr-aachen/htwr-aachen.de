import { Institutes } from "@/models/institutes";
import type { NavbarConfig } from "@/models/layout";

export const DefaultNavbar: NavbarConfig = {
  linkElements: [
    {
      name: "Studium",
      url: "/",
      path: "/",
    },
    {
      name: "Forschung",
      url: "/",
      path: "/",
    },
    {
      name: "Wirtschaft",
      url: "/",
      path: "/",
    },
  ],
  main: { name: "HTWR", url: "/" },
  logo: {
    logoUrl: "/assets/rwth/htwr_banner.png",
    alt: "HTWR Logo",
    href: "/",
  },
};

export const SCILNavbarConfig: NavbarConfig = {
  linkElements: [
    {
      name: "⚠Studium",
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
      url: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "All**Gemein**es",
          url: "/nichts",
          path: "/nichts",
        },
        {
          name: "Publikationen",
          url: "/nichts",
          path: "/nichts",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      url: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "AllGemein",
          url: "/nichts",
          path: "/nichts",
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

export const WSINavbar: NavbarConfig = {
  linkElements: [
    {
      name: "⚠Studium",
      url: "/wsi/studium",
      path: "/studium",
      links: [
        {
          name: "Klausuren",
          url: "/wsi/studium/klausuren",
          path: "studium/klausuren",
        },
        {
          name: "Aufgaben",
          url: "/wsi/studium/aufgaben",
          path: "studium/aufgaben",
        },
        {
          name: "Zusammenfassungen",
          url: "/wsi/studium/teachings",
          path: "studium/teachings",
        },
      ],
    },
    {
      name: "Forschung",
      url: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "All**Gemein**es",
          url: "/nichts",
          path: "/nichts",
        },
        {
          name: "Publikationen",
          url: "/nichts",
          path: "/nichts",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      url: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "AllGemein",
          url: "/nichts",
          path: "/nichts",
        },
        { name: "Kontakt", url: "/contact", path: "" },
      ],
    },
  ],
  main: { name: "WSI", url: "/wsi" },
  logo: {
    logoUrl: "/assets/wsi/wsi.jpg",
    alt: "WSI Logo",
    href: "/wsi",
    width: 387,
    height: 110,
  },
};

export const SIBDNavbar: NavbarConfig = {
  linkElements: [
    {
      name: "⚠Studium",
      url: "/sibd/studium",
      path: "/studium",
      links: [
        {
          name: "Klausuren",
          url: "/sibd/studium/klausuren",
          path: "studium/klausuren",
        },
        {
          name: "Aufgaben",
          url: "/sibd/studium/aufgaben",
          path: "studium/aufgaben",
        },
        {
          name: "Zusammenfassungen",
          url: "/sibd/studium/teachings",
          path: "studium/teachings",
        },
      ],
    },
    {
      name: "Forschung",
      url: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "All**Gemein**es",
          url: "/nichts",
          path: "/nichts",
        },
        {
          name: "Publikationen",
          url: "/nichts",
          path: "/nichts",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      url: "/nichts",
      path: "/nichts",
      links: [
        {
          name: "AllGemein",
          url: "/nichts",
          path: "/nichts",
        },
        { name: "Kontakt", url: "/contact", path: "" },
      ],
    },
  ],
  main: { name: "SIBD", url: "/sibd" },
  logo: {
    logoUrl: "/assets/sibd/sibd.png",
    alt: "SIBD Logo",
    href: "/sibd",
    width: 387,
    height: 110,
  },
};

export const CESTINavbar: NavbarConfig = {
  logo: {
    logoUrl: "/assets/cesti/banner.svg",
    alt: "CESTI Logo",
    href: "/cesti",
    width: 380,
    height: 110,
  },
  main: {
    name: "CESTI",
    url: "/cesti",
  },
  linkElements: [
    {
      name: "⚠Studium",
      url: "/cesti/studium",
      path: "/studium",
      links: [
        {
          name: "Zusammenfassungen",
          url: "/cesti/studium/teachings",
        },
        {
          name: "Resourcen",
          url: "/cesti/studium/resources",
        },
        {
          name: "Klausuren",
          url: "/cesti/studium/klausuren",
        },
      ],
    },
    {
      name: "Forschung",
      url: "/cesti/studium",
    },
    {
      name: "Das Lehr- und Forschungsgebiet",
      url: "/nichts",
    },
  ],
};

export const DEDDEBMENavbar: NavbarConfig = {
  logo: {
    logoUrl: "/assets/deddebme/banner.svg",
    alt: "deddebme Logo",
    href: "/deddebme",
    width: 170,
    height: 58,
  },
  main: {
    name: "DEDDEBME",
    url: "/deddebme",
  },
  linkElements: [
    {
      name: "⚠Lehre",
      url: "/deddebme/lehre",
      path: "/lehre",
      links: [
        {
          name: "Zusammenfassungen",
          url: "/deddebme/lehre/teachings",
        },
        {
          name: "Resourcen",
          url: "/deddebme/lehre/resources",
        },
      ],
    },
    {
      name: "⚠Forschung",
      url: "/deddebme/lehre",
    },
    {
      name: "Tools",
      url: "/nichts",
    },
    {
      name: "Lehrstuhl",
      url: "/nichts",
      links: [
        {
          name: "Kontakt",
          url: "/contact",
        },
        {
          name: "Impressum",
          url: "/impressum",
        },
        {
          name: "Datenschutz",
          url: "/datenschutz",
        },
      ],
    },
  ],
};
export function getNavbarConfig(institute: Institutes): NavbarConfig {
  switch (institute) {
    case Institutes.SCIL:
      return SCILNavbarConfig;
    case Institutes.WSI:
      return WSINavbar;
    case Institutes.SIBD:
      return SIBDNavbar;
    case Institutes.CESTI:
      return CESTINavbar;
    case Institutes.DEDDEBME:
      return DEDDEBMENavbar;
    default:
      return DefaultNavbar;
  }
}
