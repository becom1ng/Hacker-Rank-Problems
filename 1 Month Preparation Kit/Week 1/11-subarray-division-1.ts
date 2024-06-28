// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares s[] has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
//    The length of the segment matches Ron's birth MONTH m, and,
//    The sum of the integers on the squares is equal to his birth DAY d.
// Determine how many ways she can divide the chocolate.

// ! Function Description
// Complete the birthday function. It has the following parameter(s):
//    int s[n]: the numbers on each of the squares of chocolate
//    int d: Ron's birth day
//    int m: Ron's birth month
// Returns:
//    int: the number of ways the bar can be divided

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d = desired sum
 *  3. INTEGER m = number of items in sum
 */

// s = [2, 2, 2, 1, 3, 2, 2, 3, 3, 1, 4, 1, 3, 2, 2, 1, 2, 2, 4, 2, 2, 3, 5, 3, 4, 3,	2, 1, 4, 5, 4];
// d = 10;
// m = 4;

function birthday(s: number[], d: number, m: number): number {
	let result: number = 0;
	if (s.length < m) return 0;

	// ! My first Noob solution with only loops
	// for (let i = 0; i <= s.length - m; i++) {
	// 	let sum = s[i];

	// 	for (let x = 1; x < m; x++) {
	// 		sum += s[i + x];
	// 	}

	// 	if (sum === d) {
	// 		result++;
	// 	}
	// }

	// ! Sliding Window (by me)
	// let sum: number = 0;

	// for (let i = 0; i < m; i++) {
	// 	sum += s[i];
	// 	if (sum === d) {
	// 		result++;
	// 	}
	// }

	// for (let i = m; i < s.length; i++) {
	// 	sum = sum - s[i - m] + s[i];
	// 	if (sum === d) {
	// 		result++;
	// 	}
	// }

	// ! Solution from discussion
	for (let i = 0; i < s.length - m + 1; i++) {
		if (s.slice(i, i + m).reduce((a, b) => a + b, 0) == d) result++;
	}

	return result;
}

// input key
// 1st line = n, number of squares in the chocolate bar (array length)
// 2nd line = s[i], all integers on each square. s.length = n
// 3rd line = d and m

let s = [2, 2, 1, 3, 2];
let d = 4;
let m = 2;
console.log(birthday(s, d, m) + ' | Expected: 2'); // 2

s = [4];
d = 4;
m = 1;
console.log(birthday(s, d, m) + ' | Expected: 1'); // 1

s = [
	2, 2, 2, 1, 3, 2, 2, 3, 3, 1, 4, 1, 3, 2, 2, 1, 2, 2, 4, 2, 2, 3, 5, 3, 4, 3,
	2, 1, 4, 5, 4,
];
d = 10;
m = 4;

console.log(birthday(s, d, m) + ' | Expected: 7'); // 7
