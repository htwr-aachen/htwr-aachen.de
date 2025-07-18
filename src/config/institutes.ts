// !! cannot use typescript types here, because when using Record<*string*, Subject> or similar `keyof` would
// choose string and not "HTWR"|"SYSCOM"|...

export const RealInstituteConfig = {
  syscom: {
    name: "syscom",
    href: "/syscom",
    icon: "/assets/syscom/syscom_icon.svg",
    banner: "/assets/syscom/syscom_banner.png",
    description: "Communication & Distributed Systems",
    fullName: "Communication & Distributed Systems",
    professor: "Wehrle",
  },
  es: {
    name: "es",
    href: "/es",
    icon: "/assets/es/es_icon.svg",
    banner: "/assets/es/es.png",
    description: "Embedded Software",
    fullName: "Embedded Software",
    professor: "Rumpe",
  },
  scil: {
    name: "scil",
    href: "/scil",
    icon: "/assets/scil/scil_icon.svg",
    banner: "/assets/scil/scil.svg",
    description: "Theorie und Logik Systeme diskreter",
    fullName: "Theorie und Logik Systeme diskreter",
    professor: "Grohe",
  },
  wsi: {
    name: "wsi",
    href: "/wsi",
    icon: "/assets/wsi/favicon.png",
    banner: "/assets/wsi/wsi.png",
    description: "Wirtschafts-Statistik und mathematik",
    fullName: "Wirtschafts-Statistik und mathematik",
    professor: "Steland",
  },
  sibd: {
    name: "sibd",
    href: "/sibd",
    icon: "/assets/sibd/sibd_logo.png",
    banner: "/assets/sibd/sibd.png",
    description: "Information und Datenbankensysteme",
    fullName: "Information und Datenbankensysteme",
    professor: "Decker",
  },
  cigol: {
    name: "cigol",
    href: "/cigol",
    icon: "/assets/cigol/cigol_icon.svg",
    banner: "/assets/cigol/logo.svg",
    description: "Informationsche Grundlagen der Mathematik",
    fullName: "Informationsche Grundlagen der Mathematik",
    professor: "Grädel/Grohe",
  },
  cesti: {
    name: "cesti",
    href: "/cesti",
    icon: "/assets/cesti/logo.png",
    banner: "/assets/cesti/logo.svg",
    description: "Lehr- und Forschungsgebiet Informatik Sicherheit-IT",
    fullName: "Security IT",
    professor: "Meyer",
  },
  deddebme: {
    name: "deddebme",
    href: "/deddebme",
    icon: "/assets/deddebme/logo-black.png",
    banner: "/assets/deddebme/banner.svg",
    description: "Spaß",
    fullName: "Software Embedded",
    professor: "Kowalewski",
  },
  male: {
    name: "male",
    href: "/male",
    icon: "/assets/male/logo.png",
    banner: "/assets/rwth/htwr.png",
    description: "Male?🤷",
    fullName: "Elements of Machine Learning and Data Science",
    professor:
      "Leibe, Hoos, Prof. Dr. Ir. Willibrordus Martinus Pancratius „Wil“ van der Aalst",
  },
} as const;

export const InstituteConfig = {
  ...RealInstituteConfig,
  htwr: {
    name: "htwr",
    displayName: "Just Hilfe Team für widerwillige Ratsuchende things...",
    href: "/",
    icon: "/assets/rwth/htwr.png",
    banner: "/assets/rwth/htwr_banner.png",
    description: "Die beste Hilfe für ihr Doppelgänger",
    fullName: "Hilfe Team für widerwillige Ratsuchende",
    professor: "",
  },
} as const;

export type Institutes = keyof typeof InstituteConfig;
export const InstituteCount = Object.keys(InstituteConfig).length;

export type RealInstitutes = keyof typeof RealInstituteConfig;
