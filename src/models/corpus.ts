export class InvalidCorpusConfig extends Error {
	constructor(message: string, cause: Error | string | null) {
		super(message);
		this.name = "InvalidAssociationConfig";
		this.cause = cause;
	}
}

export interface CorpusConfig {
	articlesURL: string;
	articlesPath: string;
}
