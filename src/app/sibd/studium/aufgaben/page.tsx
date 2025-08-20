import type { Metadata } from "next";

import BasicSubjectInfo, {
	LinkCard,
} from "@/components/documents/basic-subject-info";
import { SubjectDocumentList } from "@/components/documents/list";
import { HeadLine } from "@/components/rwth/headline";

import { SIBDSchnellzugriff } from "../../schnellzugriff";

export const metadata: Metadata = {
	title: "Aufgaben",
	description: "DBIS Aufgaben machen Spaß haha",
	alternates: {
		canonical: "/sibd/studium/aufgaben",
	},
};

export default async function Page() {
	return (
		<div>
			<div className="px-2">
				<HeadLine>DBIS Aufgaben</HeadLine>
				<div className="grid grid-rows-2 lg:grid-cols-[1fr_250px] lg:grid-rows-1">
					<div className="mx-2 my-4 lg:m-0">
						<BasicSubjectInfo subject="dbis">
							<LinkCard title="Gremlin" href="/content-assets/dbis/gremlin.pdf">
								Gremlin
								{/** biome-ignore lint/performance/noImgElement: Use SVG */}
								<img
									src="https://www.vectorlogo.zone/logos/gremlin/gremlin-icon.svg"
									alt="Gremlin..."
								/>
							</LinkCard>
						</BasicSubjectInfo>
						<SubjectDocumentList subject="dbis" />
					</div>
					<div>
						<SIBDSchnellzugriff />
					</div>
				</div>
			</div>
		</div>
	);
}
