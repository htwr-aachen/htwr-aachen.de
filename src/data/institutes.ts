import { Institute } from "@/models/institutes";

export const InstituteConfig: Institute[] = [
  {
    name: "HTWR",
    href: "/",
    icon: "/assets/rwth/htwr.png",
    banner: "/assets/rwth/htwr_banner.png",
    description: "Die beste Hilfe für ihr Doppelgänger",
    fullName: "Hilfe Team für widerwillige Ratsuchende",
    professor: "",
    subject: "",
  },
  {
    name: "SYSCOM",
    href: "/syscom",
    icon: "/assets/rwth/syscom_icon.svg",
    banner: "/assets/rwth/syscom_banner.png",
    description: "Communication & Distributed Systems",
    fullName: "Communication & Distributed Systems",
    professor: "Wehrle",
    subject: "DATCOM"
  },
  {
    name: "ES",
    href: "/es",
    icon: "es_icon.svg",
    banner: "es.png",
    description: "Embedded Software",
    fullName: "Embedded Software",
    professor: "Rumpe",
    subject: "SWT"
  },
  {
    name: "SCIL",
    href: "/scil",
    icon: "scil_icon.svg",
    banner: "scil.svg",
    description: "Theorie und Logik Systeme diskreter",
    fullName: "Theorie und Logik Systeme diskreter",
    professor: "Grohe",
    subject: "BUK"
  },
  {
    name: "WSI",
    href: "/wsi",
    icon: "favicon.png",
    banner: "wsi.png",
    description: "Wirtschafts-Statistik und mathematik",
    fullName: "Wirtschafts-Statistik und mathematik",
    professor: "Steland",
    subject: "STOCHA"
  },
  {
    name: "ISBD",
    href: "/isbd",
    icon: "isbd_icon.svg",
    banner: "isbd.png",
    description: "Information und Datenbankensysteme",
    fullName: "Information und Datenbankensysteme",
    professor: "Decker",
    subject: "DBIS"
  },
  {
    name: "CIGOL",
    href: "/cigol",
    icon: "cigol_icon.svg",
    banner: "logo.svg",
    description: "Informationsche Grundlagen der Mathematik",
    fullName: "Informationsche Grundlagen der Mathematik",
    professor: "Grädel",
    subject: "MALO"
  }
]