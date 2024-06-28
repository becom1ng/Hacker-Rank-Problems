// Given an array of integers, where all elements but one occur twice, find the unique element.

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a: number[]): number {
	// Write your code here
	let result: number;
	let arrMap: Map<number, number> = new Map();

	a.forEach((el) => {
		arrMap.set(el, arrMap.get(el) + 1 || 1);
		// arrMap[el] = arrMap[el] + 1 || 1; // ! THIS DOESNT WORK, must use SET
	});

	for (let [key, value] of arrMap) {
		if (value === 1) {
			result = key;
			break;
		}
	}

	// arrMap.forEach((value, key) => {
	// 	if (value === 1) {
	// 		result = key;
	// ! break; // ! cannot break with foreach, so a simple for of loop is used
	// 	}
	// });

	return result;
}

console.log(lonelyinteger([1, 2, 2, 4, 4, 5, 5, 10, 10]));

// * * * * * * * * * * * * * * * * * * * *
// * One line solution:
// * const unique = a.filter((n)=> a.indexOf(n) === a.lastIndexOf(n));
// * return unique;
