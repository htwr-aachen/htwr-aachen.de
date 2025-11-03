"use client";

import { NewQuestionDrawer } from "../new-question";
import { Questions } from "../questions";
import QASearch from "../search";

export default function Page() {
	return (
		<div className="mx-auto min-h-screen px-4 lg:px-0">
			<div className="mx-auto max-w-[100ch]">
				<h1 className="my-6 scroll-m-20 font-sans text-4xl font-bold lg:text-5xl">
					HTWR-Q&amp;A - Beantwortet
				</h1>
				<div className="my-4">
					<NewQuestionDrawer />
				</div>
				<QASearch />
			</div>

			<div className="mx-4 my-8">
				<Questions
					answered={true}
					limit={10}
					key={"answered"}
					keyPrefix="answered"
				></Questions>
			</div>
		</div>
	);
}
