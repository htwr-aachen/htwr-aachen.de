import { Institutes } from "@/models/institutes";
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
    logoUrl: "/assets/rwth/htwr_banner.png",
    alt: "HTWR Logo",
    href: "/",
  },
};

export const SCILNavbarConfig: NavbarConfig = {
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
  main: { name: "SCIL", href: "/scil" },
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
      href: "/sibd/studium",
      path: "/studium",
      links: [
        {
          name: "Klausuren",
          href: "/sibd/studium/klausuren",
          path: "studium/klausuren",
        },
        {
          name: "Aufgaben",
          href: "/sibd/studium/aufgaben",
          path: "studium/aufgaben",
        },
        {
          name: "Zusammenfassungen",
          href: "/sibd/studium/teachings",
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
  main: { name: "SIBD", href: "/sibd" },
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
    href: "/deddebme",
  },
  linkElements: [
    {
      name: "⚠Lehre",
      href: "/deddebme/lehre",
      path: "/lehre",
      links: [
        {
          name: "Zusammenfassungen",
          href: "/deddebme/lehre/teachings",
        },
        {
          name: "Resourcen",
          href: "/deddebme/lehre/resources",
        },
      ],
    },
    {
      name: "⚠Forschung",
      href: "/deddebme/lehre",
    },
    {
      name: "Tools",
      href: "/nichts",
    },
    {
      name: "Lehrstuhl",
      href: "/nichts",
      links: [
        {
          name: "Kontakt",
          href: "/contact",
        },
        {
          name: "Impressum",
          href: "/impressum",
        },
        {
          name: "Datenschutz",
          href: "/datenschutz",
        },
      ],
    },
  ],
};

export const MaLeNavbar: NavbarConfig = {
  linkElements: [
    {
      name: "⚠Zusammenfassungen (vielleicht)",
      href: "/nichts",
    },
    {
      name: "Material",
      href: "/male/material",
      path: "/male/material",
    },
  ],
  main: { name: "MaLe", href: "/male" },
  logo: {
    logoUrl: "/assets/rwth/htwr_banner.png",
    alt: "HTWR Logo",
    href: "/male",
  },
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
    case Institutes.MALE:
      return MaLeNavbar;
    default:
      return DefaultNavbar;
  }
}
