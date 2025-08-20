export function CheckIsWinning(values: boolean[], size: number, index: number) {
	if (!values[index]) {
		return false;
	}
	const row = Math.floor(index / size);
	const column = index % size;

	return (
		CheckRowWinning(values, size, row) ||
		CheckColumnWinning(values, size, column) ||
		CheckDiagonalWinning(values, size, column, row)
	);
}
/**
 * @param gridValues - The value matrix
 * @param size - The matrix size
 * @param row - The row to check
 * @returns Whether the row passes a winning condition
 */
function CheckRowWinning(
	gridValues: boolean[],
	size: number,
	row: number,
): boolean {
	for (let c = 0; c < size; c++) {
		if (!gridValues[row * size + c]) {
			return false;
		}
	}
	return true;
}

/**
 * @param gridValues - The value matrix
 * @param size - The matrix size
 * @param column - The row to check
 * @returns Whether the column passes a winning condition
 */
function CheckColumnWinning(
	gridValues: boolean[],
	size: number,
	column: number,
): boolean {
	for (let r = 0; r < size; r++) {
		if (!gridValues[r * size + column]) {
			return false;
		}
	}
	return true;
}

/**
 * Checks if a winning condition is met along the diagonal(s) that intersect
 * a specific cell identified by its index in a flattened grid.
 *
 * @param gridValues - The matrix
 * @param size - The dimension of the matrix
 * @param row - The row index
 * @param column - The column index
 * @returns Whether a winning condition is met on either relevant diagonal.
 */
function CheckDiagonalWinning(
	gridValues: boolean[],
	size: number,
	row: number,
	column: number,
): boolean {
	if (row === column) {
		let mainDiagonalWinning = true;
		for (let i = 0; i < size; i++) {
			const diagIndex = i * size + i;
			if (!gridValues[diagIndex]) {
				mainDiagonalWinning = false;
				break;
			}
		}
		if (mainDiagonalWinning) {
			return true;
		}
	}

	if (row + column === size - 1) {
		let antiDiagonalWinning = true;
		for (let r = 0; r < size; r++) {
			const c = size - 1 - r;
			const antiDiagIndex = r * size + c;
			if (!gridValues[antiDiagIndex]) {
				antiDiagonalWinning = false;
				break;
			}
		}
		if (antiDiagonalWinning) {
			return true;
		}
	}
	return false;
}
