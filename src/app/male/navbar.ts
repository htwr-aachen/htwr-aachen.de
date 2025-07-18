import type { NavbarConfig } from "@/models/layout";

export const navbar: NavbarConfig = {
  linkElements: [
    {
      name: "Zusammenfassungen",
      href: "/male/male/summaries",
    },
    {
      name: "Material",
      href: "/male/male/materials",
      path: "/male/male/materials",
    },
  ],
  main: { name: "MaLe", href: "/male" },
  logo: {
    src: "/assets/rwth/htwr_banner.png",
    alt: "HTWR Logo",
    href: "/male",
  },
};
