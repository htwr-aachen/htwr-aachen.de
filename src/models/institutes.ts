export const INSTITUTES_MAP = {
  HTWR: 0,
  SYSCOM: 1,
  ES: 2,
  SCIL: 3,
  WSI: 4,
  SIBD: 5,
  CIGOL: 6,
  CESTI: 7,
  DEDDEBME: 8,
  MALE: 9,
} as const;

export type Institutes = keyof typeof INSTITUTES_MAP;
export const INSTITUTES_LENGTH = Object.keys(INSTITUTES_MAP).length;

export type Institute = {
  name: Institutes;
  subject: string;
  professor: string;
  fullName: string;
  href: string;
  icon?: string;
  banner?: string;
  description?: string;
};
