export type Panikzettel = {
  name: string;
  type: "pf" | "wpf" | "af";
  filename: string;
  url: string;
  semester?: number;
  shortname?: string;
  date?: string;
};
