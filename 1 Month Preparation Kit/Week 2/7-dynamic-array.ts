// Function Description
// dynamicArray has the following parameters:
//    int n: the number of empty arrays to initialize in arr
//    string queries[q]: query strings that contain 3 space-separated integers
// Returns
//    int[]: the results of each type 2 query in the order they are presented

// - Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
// - Declare an integer, lastAnswer, and initialize it to 0.
// - There are 2 types of queries, given as an array of strings for you to parse:
//  1. Query: 1 x y
//    1. Let idx = ( (x @ lastAnswer) % n).
//    2. Append the integer y to arr[idx].
//  2. Query: 2 x y
//    1. Let idx = ( (x @ lastAnswer) % n ).
//    2. Assign the value arr[idx][y % size(arr[idx])] to last Answer.
//    3. Store the new value of last Answer to an answers array.
// Note: is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia. % is the modulo
// operator.
// Finally, size(arr[idx]) is the number of elements in arr[idx]

function dynamicArray(n: number, queries: number[][]): number[] {
	// Write your code here
	let results: number[] = [];
	let lastAnswer: number = 0;
	// ! the two methods below do *not* work ... see below
	// let arr = new Array(n).fill([]);
	// let arr = Array(n).fill(Array(0).fill(0));

	// ! useful function to create 2D arrays in javascript
	// note that Array(n).fill([]) will NOT work as expected as all the empty arrays will reference to the same instance!
	// const create2DArray = (n, m, value) =>
	// 	[...Array(n)].map((_) => [...Array(m)].map((_) => value));
	const create2DArray = (n: number, m: number, value: number) =>
		[...Array(n)].map((_) => [...Array(m)].map((_) => value));
	let arr = create2DArray(n, 0, 0); // [[], [], [],...]
	console.log(arr);

	for (let q of queries) {
		let x = q[1];
		let y = q[2];
		if (q[0] === 1) {
			let idx = (x ^ lastAnswer) % n;
			arr[idx].push(y);
		} else {
			let idx = (x ^ lastAnswer) % n;
			lastAnswer = arr[idx][y % arr[idx].length];
			results.push(lastAnswer);
		}
	}
	console.log(results);

	return results;
}

let nInput = 2;
let queriesInput = [
	[1, 0, 5],
	[1, 1, 7],
	[1, 0, 3],
	[2, 1, 0],
	[2, 1, 1],
];
console.log(dynamicArray(nInput, queriesInput));
