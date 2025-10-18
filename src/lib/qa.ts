import { QAAnswer, QAQuestion } from "@/models/qa";

export const QAAPI = "http://localhost:8080/api/qa";
export const QA_QUESTIONS_LIMIT = 50;

export interface QANewQuestionDTO {
	title: string;
	description: string;
}

export interface QAQuestionDTO {
	id: number;
	priority: number;
	title: string;
	description: string;
	created_at: string;
	answer?: QAAnswerDTO;
	deletion_requests_count?: number;
}

export interface QANewAnswerDTO {
	answer: string;
	known_since: string;
}

export interface QAAnswerDTO {
	id: number;
	priority: number;
	answer: string;
	known_since: string;
	created_at: string;
	deletion_requests_count?: number;
}

export interface QAGetQuestionsQueryDTORes {
	questions: QAQuestionDTO[];
}

/**
 * Create a new question
 * @param question the question properties
 * @returns the created question
 */
export async function PostQuestion(
	question: QANewQuestionDTO,
): Promise<QAQuestion> {
	const result = await fetch(`${QAAPI}/questions`, {
		method: "POST",
		body: JSON.stringify(question),
		credentials: "include",
	});

	if (!result.ok) {
		//TODO: decode error message
		throw new Error("question was not accepted at the server");
	}
	const added = result.json();
	return added;
}

export async function PostAnswer(
	questionId: string,
	answer: QANewAnswerDTO,
): Promise<QAAnswerDTO> {
	const result = await fetch(`${QAAPI}/questions/${questionId}/answers`, {
		method: "POST",
		body: JSON.stringify(answer),
		credentials: "include",
	});

	if (!result.ok) {
		//TODO: decode error message
		throw new Error("answer was not accepted at the server");
	}
	const added = result.json();
	return added;
}

/**
 * Retrieves a list of questions that are answered or unanswered having an ID lower that `beginID`
 * @param answered - Whether to get answered or unanswered questions
 * @param lastPriority - The maximum Priority a question can have (excluding)
 * @param lastId - The maximum ID a question can have (excluding)
 * @param limit - The maximum amount of question to get. (server-side maximums apply)
 * @returns A list of questions with the highest priority answer (if any)
 */
export async function GetQuestions(
	answered: boolean,
	lastPriority: number,
	lastId: number,
	limit: number = QA_QUESTIONS_LIMIT,
): Promise<QAQuestion[]> {
	const result = await fetch(
		`${QAAPI}/questions?answered=${answered}&last-priority=${lastPriority}&last-id=${lastId}&limit=${limit}`,
		{
			method: "GET",
			credentials: "include",
		},
	);

	if (!result.ok) {
		//TODO: decode error message
		throw new Error(
			`could not retrieve unanswered questions: ${result.status}`,
		);
	}
	const jsonRes = (await result.json()) as QAGetQuestionsQueryDTORes;

	const qaQuestions: QAQuestion[] = jsonRes?.questions?.map((q) => {
		var question: QAQuestion = {
			id: q.id,
			title: q.title,
			description: q.description,
			createdAt: new Date(q.created_at),
			priority: q.priority,
			deletion_requests_count: q.deletion_requests_count || 0,
		};

		if (q.answer) {
			question.answer = {
				id: q.answer.id,
				answer: q.answer.answer,
				known_since: new Date(q.answer.known_since),
				createdAt: new Date(q.answer.created_at),
				priority: q.answer.priority,
				deletion_requests_count: q.answer.deletion_requests_count || 0,
			};
		}

		return question;
	});

	return qaQuestions;
}
