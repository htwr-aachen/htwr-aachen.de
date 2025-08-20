import { join } from "path";

import urlJoin from "@/lib/url";

import { BaseURL } from "./app";
import { DefaultSummaryPath } from "./summary";

const DefaultContentPath = join(process.cwd(), "content-assets");

// !! cannot use typescript types here, because when using Record<*string*, Subject> or similar `keyof` would
// choose string and not "buk"|"swt"|...

export const SubjectConfig = {
	buk: {
		institutes: ["scil"],
		name: "buk",
		displayName: "BuK",
		fullName: "Berechenbarkeit und Komplexität",
		articlesPath: join(DefaultSummaryPath, "scil", "buk"),
		articlesURL: urlJoin(BaseURL, "/scil/buk/summaries"),
		documentsPath: join(DefaultContentPath, "buk"),
	},
	swt: {
		institutes: ["es"],
		name: "swt",
		displayName: "SWT",
		fullName: "Softwaretechnik",
		articlesPath: join(DefaultSummaryPath, "es", "swt"),
		articlesURL: urlJoin(BaseURL, "/es/swt/summaries"),
		documentsPath: join(DefaultContentPath, "swt"),
	},
	dbis: {
		institutes: ["sibd"],
		name: "dbis",
		displayName: "DBIS",
		fullName: "Datenbanken und Informationssysteme",
		articlesPath: join(DefaultSummaryPath, "sibd", "dbis"),
		articlesURL: urlJoin(BaseURL, "/sibd/dbis/summaries"), // this is the new stable api
		documentsPath: join(DefaultContentPath, "dbis"),
	},
	datkom: {
		institutes: ["syscom"],
		name: "datkom",
		displayName: "DatKom",
		fullName: "Datenkommunikation",
		articlesPath: join(DefaultSummaryPath, "syscom", "datkom"),
		articlesURL: urlJoin(BaseURL, "/syscom/datkom/summaries"),
		documentsPath: join(DefaultContentPath, "datkom"),
	},
	mit: {
		institutes: ["syscom"],
		name: "mit",
		displayName: "MIT",
		fullName: "Mobile Internet Technology",
		articlesPath: join(DefaultSummaryPath, "syscom", "mit"),
		articlesURL: urlJoin(BaseURL, "/syscom/mit/summaries"),
		documentsPath: join(DefaultContentPath, "mit"),
	},
	ait: {
		institutes: ["syscom"],
		name: "ait",
		displayName: "AIT",
		fullName: "Advanced Internet Technology",
		articlesPath: join(DefaultSummaryPath, "syscom", "ait"),
		articlesURL: urlJoin(BaseURL, "/syscom/ait/summaries"),
		documentsPath: join(DefaultContentPath, "ait"),
	},
	stocha: {
		institutes: ["wsi"],
		name: "stocha",
		displayName: "Stocha",
		fullName: "Stochastik",
		articlesPath: join(DefaultSummaryPath, "wsi", "stocha"),
		articlesURL: urlJoin(BaseURL, "/wsi/stocha/summaries"),
		documentsPath: join(DefaultContentPath, "stocha"),
	},
	malo: {
		institutes: ["cigol", "scil"],
		name: "malo",
		displayName: "Malo",
		fullName: "Mathematische Logik",
		articlesPath: join(DefaultSummaryPath, "cigol", "malo"),
		articlesURL: urlJoin(BaseURL, "/cigol/malo/summaries"),
		documentsPath: join(DefaultContentPath, "malo"),
	},
	itsec: {
		institutes: ["cesti"],
		name: "itsec",
		displayName: "IT-Sec",
		fullName: "IT-Security",
		articlesPath: join(DefaultSummaryPath, "cesti", "itsec"),
		articlesURL: urlJoin(BaseURL, "/cesti/itsec/summaries"),
		documentsPath: join(DefaultContentPath, "itsec"),
	},
	psp: {
		institutes: ["deddebme"],
		name: "psp",
		displayName: "PSP",
		fullName: "Praktikum Systemprogrammierung",
		articlesPath: join(DefaultSummaryPath, "deddebme", "psp"),
		articlesURL: urlJoin(BaseURL, "/deddebme/psp/summaries"),
		documentsPath: join(DefaultContentPath, "psp"),
	},
	male: {
		institutes: ["male"],
		name: "male",
		displayName: "MaLe",
		fullName: "Elements of Machine Learning and Data Science",
		articlesPath: join(DefaultSummaryPath, "male", "male"),
		articlesURL: urlJoin(BaseURL, "/male/male/summaries"),
		documentsPath: join(DefaultContentPath, "male"),
	},
} as const;

export type Subjects = keyof typeof SubjectConfig;
export const SubjectCount = Object.keys(SubjectConfig).length;
