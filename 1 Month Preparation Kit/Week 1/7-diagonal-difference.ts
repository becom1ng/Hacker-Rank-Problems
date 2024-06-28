// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// ? For example, the square matrix is shown below:
// ? 1 2 3
// ? 4 5 6
// ? 9 8 9
// ? The left-to-right diagonal = 1 + 5 + 9 = 15
// ? The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

// input = int arr[n][m]: an array of integers
// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next n lines describes a row, arr[i] , and consists of n space-separated integers arr[i][j].

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
	let leftDiag: number = 0;
	let rightDiag: number = 0;

	for (let i = 0; i < arr.length; i++) {
		leftDiag += arr[i][i];
		rightDiag += arr[i][arr.length - 1 - i];
	}

	return Math.abs(leftDiag - rightDiag);
}

const input = [
	[11, 2, 4, 1],
	[4, 5, 6, 2],
	[10, 8, -12, 3],
	[10, 8, -12, 3],
];
// EXPECTED OUTPUT = 18

console.log(diagonalDifference(input));
