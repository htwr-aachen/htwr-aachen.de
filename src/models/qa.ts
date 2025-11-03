export type QAQuestion = {
	id: number;
	title: string;
	description?: string;
	answers?: QAAnswer[];
	createdAt: Date;
	priority: number;
	deletion_requests_count: number;
};

export type QAAnswer = {
	id: number;
	answer: string;
	known_since: Date;
	createdAt: Date;
	priority: number;
	deletion_requests_count: number;
};
