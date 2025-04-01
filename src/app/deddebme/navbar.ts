import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
  logo: {
    src: "/assets/deddebme/banner.svg",
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
      name: "⚠PSP",
      href: "/deddebme/psp",
      path: "/psp",
      links: [
        {
          name: "Tipps & Tricks",
          href: "/deddebme/psp/summaries",
        },
      ],
    },
    {
      name: "Kontakt",
      href: "/contact",
    },
    {
      name: "Impressum",
      href: "/impressum",
    },
  ],
};
