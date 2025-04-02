import type { Institutes } from "@/config/institutes";
import type { Subjects } from "@/config/subjects";
import type { NavbarConfig } from "@/models/layout";

export const institute: Institutes = "cesti"; // CHANGE_ME
export const subjects: Subjects[] = ["itsec"]; // CHANGE_ME

export const navbar: NavbarConfig = {
  logo: {
    src: "/assets/CHANGE_ME/banner.svg", // In public/assets/... muss nicht umbedingt svg sein.
    alt: "CHANGE_ME",
    href: "/CHANGE_ME",
    width: 380,
    height: 110,
  },
  main: {
    name: "CHANGE_ME",
    href: "/CHANGE_ME",
  },
  linkElements: [
    {
      // Es lässt sich erweitern...
      name: "%subjectname%",
      href: "/%institutename%/%subjectname%",
      links: [
        {
          name: "Zusammenfassungen",
          href: "/%institutename%/%subjectname%/summaries",
        },
        {
          name: "Materialien",
          href: "/%institutename%/%subjectname%/materials",
        },
        {
          name: "Klausuren",
          href: "/%institutename%/%subjectname%/exams",
        },
      ],
    },
  ],
};
