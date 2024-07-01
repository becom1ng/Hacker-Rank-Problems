/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

// You will be given a list of integers, ARR, and a single integer K.
// You must create an array of length K from elements of ARR such that its unfairness is minimized.
// Call that array ARR*. Unfairness of an array is calculated as MAX(ARR*)-MIN(ARR*)
// where max denotes the largest integer in ARR* and min demotes the smallest.

// maxMin has the following parameter(s):
//    int k: the number of elements to select
//    int arr[n]:: an array of integers
// Returns
//    int: the minimum possible unfairness

function maxMin(k: number, arr: number[]): number {
	// Write your code here
	let result: number = Infinity;

	arr.sort((a, b) => a - b);

	for (let i = 0; i <= arr.length - k; i++) {
		result = Math.min(result, arr[i + k - 1] - arr[i]);
	}

	return result;
}

let numSelected = 4;
let nums = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
console.log(maxMin(numSelected, nums), ' | Expected: 3'); // Expected: 3
