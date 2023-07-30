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

export const WSINavbar: NavbarConfig = {
  linkElements: [
    {
      name: "Studium",
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
      url: "/wsi/forschung",
      path: "/forschung",
      links: [
        {
          name: "All**Gemein**es",
          url: "/wsi/forschung/allgemeines",
          path: "forschung/allgemeines",
        },
        {
          name: "Publikationen",
          url: "/wsi/forschung/publikationen",
          path: "forschung/publikationen",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      url: "/wsi/lehrstuhl",
      path: "/lehrstuhl",
      links: [
        {
          name: "AllGemein",
          url: "/wsi/lehrstuhl/allgemein",
          path: "lehrstuhl/allgemein",
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
      name: "Studium",
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
      url: "/sibd/forschung",
      path: "/forschung",
      links: [
        {
          name: "All**Gemein**es",
          url: "/sibd/forschung/allgemeines",
          path: "forschung/allgemeines",
        },
        {
          name: "Publikationen",
          url: "/sibd/forschung/publikationen",
          path: "forschung/publikationen",
        },
      ],
    },
    {
      name: "Der Lehrstuhl Gang",
      url: "/sibd/lehrstuhl",
      path: "/lehrstuhl",
      links: [
        {
          name: "AllGemein",
          url: "/sibd/lehrstuhl/allgemein",
          path: "lehrstuhl/allgemein",
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

export function getNavbarConfig(institute: Institutes): NavbarConfig {
  switch (institute) {
    case Institutes.SCIL:
      return SCILNavbarConfig;
    case Institutes.WSI:
      return WSINavbar;
    case Institutes.SIBD:
      return SIBDNavbar;
    default:
      return DefaultNavbar;
  }
}
