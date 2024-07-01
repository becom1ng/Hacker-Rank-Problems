/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// sockMerchant has the following parameter(s):
//     int n: the number of socks in the pile
//     int ar[n]: the colors of each sock

function sockMerchant(n: number, ar: number[]): number {
	// Write your code here
	let result: number = 0;

	let sockMap = new Map();

	for (const item of ar) {
		sockMap.set(item, sockMap.get(item) + 1 || 1);
	}

	sockMap.forEach((value) => {
		result += Math.floor(value / 2);
	});

	return result;
}

let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar)); // Expected 3
