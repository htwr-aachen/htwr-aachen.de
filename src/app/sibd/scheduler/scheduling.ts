type Operation = "r" | "w" | "c" | "a";
type ScheduleItem = {
	operation: Operation;
	transaction: number;
	resource: string | null;
};

export function findTransactionOperationIndex(
	schedule: ScheduleItem[],
	transaction: number,
	operation: Operation,
): number {
	return schedule.findIndex(
		(op) => op.transaction === transaction && op.operation === operation,
	);
}

export function parseSchedule(schedule: string): ScheduleItem[] {
	const pattern = /([rwca])(\d)(?:\((\w)\))? ?/g;
	const parsedSchedule: ScheduleItem[] = [];
	let match: RegExpExecArray | null = pattern.exec(schedule);

	while (match !== null) {
		parsedSchedule.push({
			operation: match[1] as Operation,
			transaction: parseInt(match[2], 10),
			resource: match[3] || null,
		});
		match = pattern.exec(schedule);
	}

	return parsedSchedule;
}

function accessToString(
	operation: Operation,
	transaction: number,
	resource: string | null,
): string {
	return resource !== null
		? `${operation}${transaction}(${resource})`
		: `${operation}${transaction}`;
}

export function visualizeSchedule(parsedSchedule: ScheduleItem[]): string {
	const transactions = new Set(parsedSchedule.map((op) => op.transaction));
	const maxTransaction = Math.max(...Array.from(transactions));
	const table: string[][] = [];

	// Initialize the table with empty strings
	for (let i = 0; i < parsedSchedule.length; i++) {
		table.push(new Array(maxTransaction).fill(""));
	}

	// Populate the table with operations
	parsedSchedule.forEach((item, index) => {
		let operationString =
			item.operation === "r"
				? "read"
				: item.operation === "w"
					? "write"
					: item.operation === "c"
						? "commit "
						: "abort";
		if (item.resource) {
			operationString += ` ${item.resource}`;
		}
		table[index][item.transaction - 1] = operationString;
	});

	// Create the table string
	let tableString = "";
	const separator = `${"+---------".repeat(maxTransaction)}+\n`;

	// Add header
	tableString += separator;
	tableString += `|${Array.from(transactions)
		.map((t) => `    ${t}    `)
		.join("|")}|\n`;
	tableString += separator.replace(/-/g, "=");

	// Add rows
	table.forEach((row) => {
		tableString += `|${row.map((cell) => cell.padEnd(9)).join("|")}|\n`;
		tableString += separator;
	});

	return tableString;
}

export function rcAcaStCheck(
	parsedSchedule: ScheduleItem[],
): [boolean, boolean, boolean] {
	let isRc = true;
	let isAca = true;
	let isSt = true;

	for (let i = 0; i < parsedSchedule.length; i++) {
		const { operation, transaction, resource } = parsedSchedule[i];

		if (operation !== "w") continue;

		const transactionCommitIndex = findTransactionOperationIndex(
			parsedSchedule,
			transaction,
			"c",
		);
		if (transactionCommitIndex === -1) {
			isRc = isAca = isSt = false;
			break;
		}

		for (let j = i + 1; j < parsedSchedule.length; j++) {
			const {
				operation: op,
				transaction: trans,
				resource: res,
			} = parsedSchedule[j];

			if (trans === transaction || res !== resource) continue;

			if (op === "r" && transactionCommitIndex > j) {
				isAca = false;
				if (
					findTransactionOperationIndex(parsedSchedule, trans, "c") <
					transactionCommitIndex
				) {
					isRc = false;
				}
			}

			if (op === "w" && transactionCommitIndex > j) {
				isSt = false;
			}
		}
	}

	return [isRc, isAca, isSt];
}

export function conf(parsedSchedule: ScheduleItem[]): Set<string> {
	const abortingTransactions = new Set(
		parsedSchedule
			.filter((op) => op.operation === "a")
			.map((op) => op.transaction),
	);
	const filteredSchedule = parsedSchedule.filter(
		(op) => !abortingTransactions.has(op.transaction),
	);
	const conflicts = new Set<string>();

	filteredSchedule.forEach((op, index) => {
		for (let i = index + 1; i < filteredSchedule.length; i++) {
			const nextOp = filteredSchedule[i];
			if (
				op.resource === nextOp.resource &&
				op.transaction !== nextOp.transaction &&
				(op.operation === "w" || nextOp.operation === "w")
			) {
				conflicts.add(
					`${accessToString(
						op.operation,
						op.transaction,
						op.resource,
					)}, ${accessToString(
						nextOp.operation,
						nextOp.transaction,
						nextOp.resource,
					)}`,
				);
			}
		}
	});

	return conflicts;
}

// Example usage
// let scheduleStr = "w1(x) r2(x) c2 c1";
// let parsedSchedule = parseSchedule(scheduleStr);
// console.log(visualizeSchedule(parsedSchedule));
// const [isRc, isAca, isSt] = rcAcaStCheck(parsedSchedule);
// console.log(`RC: ${isRc}, ACA: ${isAca}, ST: ${isSt}`);
// console.log(`Conflicts: ${Array
