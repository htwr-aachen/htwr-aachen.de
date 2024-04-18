import type { Institutes } from "@/config/institutes";
import type { Subjects } from "@/config/subjects";
import type { NavbarConfig } from "@/models/layout";

export const institute: Institutes = "cesti"; // CHANGE_ME
export const subjects: Subjects[] = ["itsec"]; // CHANGE_ME

export const navbar: NavbarConfig = {
  logo: {
    src: "/assets/cesti/banner.svg",
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
      // Es lässt sich erweitern sollte es aber nicht umbedingt. Es machts simplerer...
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
