import { FileWarning } from "lucide-react";
import Link from "next/link";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

/**
 * A component to view and filter all exams to the subject
 */
export default function ExamsInfo() {
	return (
		<Alert>
			<FileWarning className="size-4"></FileWarning>
			<AlertTitle>Hier ist noch etwas in der Vorbereitung</AlertTitle>
			<AlertDescription>
				Aber ihr könnt gerne mithelfen, denn dann geht es zu 100% schneller.{" "}
				<Link href="/docs/exams" className="text-white">
					Hier
				</Link>
			</AlertDescription>
		</Alert>
	);
}
