import { join } from "path";

export const DefaultTeachingDir = join(process.cwd(), "teachings");
export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.htwr-aachen.de"
    : "http://localhost:8080";
