import { useCallback, useEffect, useState } from "react";
import { GetQuestions, QA_QUESTIONS_LIMIT } from "@/lib/qa";
import { QAQuestion } from "@/models/qa";

interface UseQAQuestionsOptions {
	answered: boolean;
	initialLimit?: number;
	autoLoad?: boolean;
}

const MAX_OFFSET = 2147483647;

interface UseQAQuestionsOptions {
	answered: boolean;
	initialLimit?: number;
	autoLoad?: boolean;
	enableInfiniteScroll?: boolean;
	scrollThreshold?: number; // pixels from bottom to trigger load
}

interface UseQAQuestionsReturn {
	questions: QAQuestion[];
	loading: boolean;
	error: Error | null;
	hasMore: boolean;
	loadMore: () => Promise<void>;
	refresh: () => Promise<void>;
}

type Offset = {
	id: number;
	priority: number;
};

const INITIAL_OFFSET: Offset = {
	id: MAX_OFFSET,
	priority: MAX_OFFSET,
};

export function useQAQuestions({
	answered,
	initialLimit = QA_QUESTIONS_LIMIT,
	autoLoad = true,
}: UseQAQuestionsOptions): UseQAQuestionsReturn {
	const [questions, setQuestions] = useState<QAQuestion[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [hasMore, setHasMore] = useState(true);
	const [offset, setOffset] = useState<Offset>(INITIAL_OFFSET);

	const fetchQuestions = useCallback(
		async (currentOffset: Offset, isRefresh: boolean = false) => {
			if (loading) return;

			setLoading(true);
			setError(null);

			try {
				const newQuestions = await GetQuestions(
					answered,
					currentOffset.priority,
					currentOffset.id,
					initialLimit,
				);

				if (newQuestions.length < initialLimit) {
					setHasMore(false);
				}

				if (isRefresh) {
					setQuestions(newQuestions);
				} else {
					setQuestions((prev) => [...prev, ...newQuestions]);
				}

				// Update offset to the lowest ID from the fetched questions
				if (newQuestions.length > 0) {
					const minPriority = Math.min(...newQuestions.map((q) => q.priority));
					const minId = Math.min(...newQuestions.map((q) => q.id));
					setOffset({ id: minId, priority: minPriority });
				} else {
					setHasMore(false);
				}
			} catch (err) {
				setError(err instanceof Error ? err : new Error("Unknown error"));
			} finally {
				setLoading(false);
			}
		},
		[answered, initialLimit, loading],
	);

	const loadMore = useCallback(async () => {
		if (hasMore && !loading) {
			await fetchQuestions(offset);
		}
	}, [hasMore, loading, offset, fetchQuestions]);

	const refresh = useCallback(async () => {
		setQuestions([]);
		setOffset(INITIAL_OFFSET);
		setHasMore(true);
		await fetchQuestions(INITIAL_OFFSET, true);
	}, [fetchQuestions]);

	useEffect(() => {
		if (autoLoad && questions.length === 0) {
			fetchQuestions(INITIAL_OFFSET, true);
		}
	}, [autoLoad, answered]);

	return {
		questions,
		loading,
		error,
		hasMore,
		loadMore,
		refresh,
	};
}
