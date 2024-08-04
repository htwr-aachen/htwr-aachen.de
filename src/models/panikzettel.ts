export type Panikzettel = {
  name: string;
  type: "pf" | "wpf" | "af";
  filename: string;
  url: string;
  semester?: number;
  shortname?: string;
  date?: string;
};

export const COMPULSORY_SUBJECT = "compulsory";
export const COMPULSORY_ELECTIVE_SUBJECT = "compulsory_elective";
export const APPLICATION_AREA_SUBJECT = "application_area";
export const NON_TECHNICAL_ELECTIVE_SUBJECT = "non_technical_elective";
