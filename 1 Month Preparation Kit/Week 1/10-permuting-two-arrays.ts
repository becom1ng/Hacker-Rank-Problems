// There are two n-element arrays of integers, A and B
// ! Permute them into some A* and B* such that the relation holds for all where A*[i] + B*[i] >= k holds for all i where 0 <= i < n.
// There will be q queries consisting of A and B. For each query, return YES if some permutation A*, B* satisfying the relation exists. Otherwise, return NO.

// Complete the twoArrays function. It should return a string, either YES or NO.
// twoArrays has the following parameter(s):
//      int k: an integer
//      int A[n]: an array of integers
//      int B[n]: an array of integers
// Returns
//      string: either YES or NO

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k: number, A: number[], B: number[]): string {
	let result: string;

	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);

	for (let i = 0; i < A.length; i++) {
		if (A[i] + B[i] < k) {
			result = 'NO';
			break;
		} else {
			result = 'YES';
		}
	}

	return result;
}

const kTest = 10;
const aTest = [2, 1, 3];
const bTest = [7, 8, 9];

console.log(twoArrays(kTest, aTest, bTest)); // YES

const k2 = 5;
const a2 = [1, 2, 2, 1];
const b2 = [3, 3, 3, 4];
console.log(twoArrays(k2, a2, b2)); // NO
