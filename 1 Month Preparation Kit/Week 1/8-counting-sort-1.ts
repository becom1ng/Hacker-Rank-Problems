/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 * Note: For this exercise, always return a frequency array with 100 elements.
 */

// * countingSort has the following parameter(s):
//  Input = arr[n]: an array of integers
//          The first line contains an integer n, the number of items in arr.
//  Returns = int[100]: a frequency array
//  Constraints:
//  100 <= n <= 10^6
//  0 <= arr[i] < 100

// ? EXAMPLE:
// ?    arr = [1,1,3,2,1]
// ?    i	arr[i]	result
// ?    0	  1	    [0, 1, 0, 0]
// ?    1	  1	    [0, 2, 0, 0]
// ?    2	  3	    [0, 2, 0, 1]
// ?    3	  2	    [0, 2, 1, 1]
// ?    4	  1	    [0, 3, 1, 1]

function countingSort(arr: number[]): number[] {
	// Write your code here
	let result: number[] = new Array(100).fill(0);

	for (const i of arr) {
		result[i]++;
	}

	return result;
}

const test = [
	63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
	99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3,
	89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24,
	87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33,
	46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70,
	33,
];

const expected = [
	0, 2, 0, 2, 0, 0, 1, 0, 1, 2, 1, 0, 1, 1, 0, 0, 2, 0, 1, 0, 1, 2, 1, 1, 1, 3,
	0, 2, 0, 0, 2, 0, 3, 3, 1, 0, 0, 0, 0, 2, 2, 1, 1, 1, 2, 0, 2, 0, 1, 0, 1, 0,
	0, 1, 0, 0, 2, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 2, 1, 3, 2, 0, 0, 2, 1, 2, 1, 0,
	2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 0, 3, 2, 1, 1, 0, 1, 1, 1, 0, 2, 2,
];

console.log(countingSort(test));
console.log(countingSort(test) == expected);
