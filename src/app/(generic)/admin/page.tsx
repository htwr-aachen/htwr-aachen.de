import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "admin.page",
	description: "viel glück bot",
};

export default function AdminPage() {
	return (
		<div>
			<h1 className="text-[5rem] font-semibold">WAS SUCHST DU HIER???</h1>

			<div className="grid items-center justify-center">
				<video id="rick" controls loop autoPlay muted>
					<source src="/rick.mp4" type="video/mp4" />
					Your Browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}
