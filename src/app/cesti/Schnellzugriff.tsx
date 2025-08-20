import type { FC } from "react";

import {
	Schnellzugriff,
	SchnellzugriffLink,
} from "@/components/rwth/schnellzugriff";

export const MaterialienSchnellzugriff: FC = () => {
	return (
		<div className="max-h-410">
			<Schnellzugriff title="Materialien">
				<SchnellzugriffLink href="/cesti/itsec">IT-Sec</SchnellzugriffLink>
			</Schnellzugriff>
		</div>
	);
};
