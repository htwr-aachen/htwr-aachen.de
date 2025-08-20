import type { Metadata } from "next";
import Link from "next/link";

import { ExamNotice } from "@/components/scrap/ExamNotice";
import { getProtectedDownloads } from "@/lib/exams";

export const metadata: Metadata = {
	title: "Klausuren",
	description:
		"Da Klausuren immer problematisch zu verteilen sind werde ich da 100% sichere Captchas einbauen.",
	alternates: {
		canonical: "/cigol/malo/exams",
	},
};

export default async function Page() {
	const exams = await getProtectedDownloads("malo");

	return (
		<div>
			<div className="px-2">
				<h1 className="my-2 font-sans text-4xl font-bold">MALO Klausuren</h1>

				<div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
					<div className="mx-2 lg:m-0">
						<ExamNotice></ExamNotice>
						<ul className="mt-8 ml-8 list-disc">
							{exams.map((exam) => {
								return (
									<li key={exam}>
										<Link
											href={{
												pathname: "/protected-download",
												query: { file: exam },
											}}
											target="_blank"
										>
											{exam}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
