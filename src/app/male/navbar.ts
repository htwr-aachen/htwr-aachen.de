import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
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
    src: "/assets/rwth/htwr_banner.png",
    alt: "HTWR Logo",
    href: "/male",
  },
};
