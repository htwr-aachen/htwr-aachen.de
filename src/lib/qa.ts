import { QAAnswer, QAQuestion } from "@/models/qa";

export const QAAPI = "https://api.htwr-aachen.de";
export const QA_QUESTIONS_LIMIT = 50;

interface QAAnswerDTO {
  id: number;
  question_id: number;
  answer: string;
  known_since: string;
  created_at: string;
}

interface QAQuestionDTO {
  id: number;
  title: string;
  description?: string;
  answers?: QAAnswerDTO[];
  created_at: string;
}

export type QANewQuestionDTO = Omit<
  QAQuestionDTO,
  "id" | "answers" | "created_at"
>;

export type QANewAnswerDTO = Omit<QAAnswerDTO, "id" | "created_at">;

export async function PostQuestion(
  question: QANewQuestionDTO,
): Promise<QAQuestion> {
  const result = await fetch(`${QAAPI}/questions`, {
    method: "POST",
    body: JSON.stringify(question),
  });

  if (!result.ok) {
    //TODO: decode error message
    throw new Error("question was not accepted at the server");
  }
  const added = result.json();
  return added;
}
export async function PostAnswer(answer: QANewAnswerDTO): Promise<QAAnswerDTO> {
  const result = await fetch(`${QAAPI}/answer`, {
    method: "POST",
    body: JSON.stringify(answer),
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
 * @param beginID - The maximum ID a question can have (excluding)
 * @param limit - The maximum amount of question to get. (server-side maximums apply)
 * @returns A list of questions with the highest priority answer (if any)
 */
export async function GetQuestions(
  answered: boolean,
  beginID: number,
  limit: number = QA_QUESTIONS_LIMIT,
): Promise<QAQuestion[]> {
  const result = await fetch(
    `${QAAPI}/questions?answered=${answered}&begin_id=${beginID}&limit=${limit}`,
    {
      method: "GET",
    },
  );

  if (!result.ok) {
    //TODO: decode error message
    throw new Error(
      `could not retrieve unanswered questions: ${result.status}`,
    );
  }
  const jsonRes = (await result.json()) as QAQuestionDTO[];

  const qaQuestions: QAQuestion[] = jsonRes.map((q) => {
    let answer: QAAnswer | undefined = undefined;
    if (q.answers && q.answers.length > 0) {
      answer = {
        id: q.answers[0].id,
        answer: q.answers[0].answer,
        known_since: new Date(q.answers[0].known_since),
        createdAt: new Date(q.answers[0].created_at),
      };
    }

    return {
      id: q.id,
      title: q.title,
      description: q.description,
      answer: answer,
      createdAt: new Date(q.created_at),
    };
  });

  return qaQuestions;
}
