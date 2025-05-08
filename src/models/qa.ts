export type QAQuestion = {
  id: number;
  title: string;
  description?: string;
  answer?: QAAnswer;
  createdAt: Date;
};

export type QAAnswer = {
  id: number;
  answer: string;
  known_since: Date;
  createdAt: Date;
};
