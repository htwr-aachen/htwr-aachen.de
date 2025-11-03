import { useState } from "react";
import { GetQuestions, type Offset, QA_MAX_OFFSET_ID } from "@/lib/qa";
import type { QAQuestion } from "@/models/qa";

export interface LoadQAOptions {
	answered: boolean;
	limit: number;
}

export interface UseLoadQuestionsReturn {
	loading: boolean;
	questions: QAQuestion[];
	error: Error | null;
	hasMore: boolean;
	loadMore: () => Promise<void>;
	refresh: () => Promise<void>;
}

const INITIAL_OFFSET: Offset = {
	id: QA_MAX_OFFSET_ID,
	priority: QA_MAX_OFFSET_ID,
};

export function useLoadQuestions(
	options: LoadQAOptions,
): UseLoadQuestionsReturn {
	const [questions, setQuestions] = useState<QAQuestion[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [hasMore, setHasMore] = useState(true);
	const [offset, setOffset] = useState<Offset>(INITIAL_OFFSET);

	const fetchQuestions = async (
		currentOffset: Offset,
		isRefresh: boolean = false,
	) => {
		setLoading(true);
		setError(null);
		try {
			const newQuestions = await GetQuestions(
				options.answered,
				currentOffset,
				options.limit,
			);
			if (newQuestions.length === 0 || newQuestions.length < options.limit) {
				setHasMore(false);
			}

			if (isRefresh) {
				setQuestions(newQuestions);
			} else {
				setQuestions((prev) => [...prev, ...newQuestions]);
			}

			if (newQuestions.length > 0) {
				// questions are ordered by priority and id
				const last = newQuestions[newQuestions.length - 1];
				setOffset({
					id: last.id,
					priority: last.priority,
				});
			}
		} catch (err) {
			setError(err instanceof Error ? err : new Error("Unknown error"));
		} finally {
			setLoading(false);
		}
	};

	const loadMore = async () => {
		if (hasMore && !loading) {
			await fetchQuestions(offset);
		}
	};

	const refresh = async () => {
		setQuestions([]);
		setOffset(INITIAL_OFFSET);
		setHasMore(true);
		await fetchQuestions(INITIAL_OFFSET, true);
	};

	return {
		loading,
		questions,
		hasMore,
		error,
		loadMore,
		refresh,
	};
}
