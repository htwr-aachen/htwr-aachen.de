import type { ReactNode } from "react";

// The faculties navbars are split into two different high level files because they arent so similar
// and require seperate react elements and positions anyway (other possibilities are react portals).

/**
 * This are the unified Props of the desktop and mobile faculties navbars
 */
export type FacultiesNavProps = {};

/**
 * A type for declaring a valid nav link for the faculties navigation
 */
export type FacultiesNavLink = {
  /**
   * The actual content to be displayed primarily
   */
  content: ReactNode;

  /**
   * The content of the lower priority "description"
   */
  subcontent?: ReactNode;

  /**
   * Tooltip information (Easter eggs)
   */
  tooltip?: string;

  /**
   * The link href
   */
  href: string;

  /**
   * A prefix to enable highlighting the current subpage & breadcrumbs
   */
  path?: string;

  /**
   *needed for react component keys and is actually nice to have
   */
  name: string;
};

export type FacultiesNavBlock = {
  heading: ReactNode;
  links: FacultiesNavLink[];
};

// here we define a unified faculties navbar except chairs which can be searched for and are therefore dynamic
export const FacultiesNavContent: {
  left: FacultiesNavBlock;
  right: FacultiesNavBlock;
} = {
  left: {
    heading: "HTWR",
    links: [
      {
        href: "/",
        path: "/",
        content: "Hautpseite",
        name: "Hautpseite",
        tooltip: "Zurück zur Hauptseite",
      },
      {
        href: "/panikzettel",
        path: "/panikzettel",
        content: "Panikzettel",
        name: "Panikzettel",
        tooltip: "Gute zusammenfassungen zum halben Preis",
      },
    ],
  },
  right: {
    heading: "Tools & Mehr",
    links: [
      {
        href: "/lernräume",
        path: "/lernräume",
        content: "Lernräume (TODO)",
        name: "Lernräume (TODO)",
        tooltip: "Sollte vielleicht mal gemacht/verlinkt werden",
      },
      {
        href: "/botmein",
        path: "/botmein",
        content: "Hochschulsport (WIP)",
        name: "Hochschulsport (WIP)",
        tooltip: "Warum wurde das noch nicht öffentlich gemacht?",
      },
      {
        href: "httsp://bit.ly/getmeoutofrwth",
        path: "/",
        content: "Exmatrikulieren",
        name: "Exmatrikulieren",
        tooltip: "Das digitale Karmantor",
      },
    ],
  },
};
