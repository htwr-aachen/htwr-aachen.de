export const AppConfig = {
  site_name: "htwr-aachen.de",
  title: "HTWR AACHEN UNIVERSITY",
  description: "A TRUE EXZELENCE UNIVERSITY",
  locale: "de",
};

export const BaseURL =
  process.env.NODE_ENV === "production"
    ? "https://htwr-aachen.de"
    : "http://localhost:3000";
