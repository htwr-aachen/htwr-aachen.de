export const AppConfig = {
	site_name: "htwr-aachen",
	title: "HTWR AACHEN UNIVERSITY",
	description: "A TRUE EXZELENCE UNIVERSITY",
	locale: "de",
};

export const AppContactEmail = "contact@htwr-aachen.de";

export const BaseURL =
	process.env.NODE_ENV === "production"
		? "https://htwr-aachen.de"
		: "http://localhost:3000";

// Uncomment on local api integration testing
// export const APIURL =
//   process.env.NODE_ENV === "production"
//     ? "https://api.htwr-aachen.de"
//     : "http://localhost:8080";

export const APIURL = "https://api.htwr-aachen.de";
