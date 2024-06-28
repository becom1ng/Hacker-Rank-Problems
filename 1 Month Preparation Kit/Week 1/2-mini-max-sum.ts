// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
	arr.sort((a, b) => a - b);

	let minSum: number = 0;
	let maxSum: number = 0;

	for (let i = 0; i < 4; i++) {
		minSum += arr[i];
	}
	for (let i = 1; i < arr.length; i++) {
		maxSum += arr[i];
	}

	console.log(minSum + ' ' + maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
