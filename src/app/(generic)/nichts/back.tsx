"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function BackButton() {
	const router = useRouter();
	return (
		<div className="flex items-center justify-center">
			<Button
				variant="destructive"
				className="cursor-pointer"
				type="button"
				onClick={() => router.back()}
			>
				Klicke hier um zurück zu kommen.
			</Button>
		</div>
	);
}
