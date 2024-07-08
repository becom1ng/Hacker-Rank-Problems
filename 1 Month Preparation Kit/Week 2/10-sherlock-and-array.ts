// Watson gives Sherlock an array of integers. His challenge is to find an element of the array
// such that the sum of all elements to the left is equal to the sum of all elements to the right.

// Function Description
// balancedSums has the following parameter(s):
// • int arr[n]: an array of integers
// Returns
// • string: either YES or NO

// Example
// arr = [5, 6, 8, 11]
// 8 is between two subarrays that sum to 11.
// Return YES

// Example 2
// arr = [1]
// The answer is [1] since left and right sum to O.
// Return YES

// Example 3
// arr = [1, 2, 3]
// Return NO

function balancedSums(arr: number[]): string {
	let leftSum: number = 0;
	let rightSum: number = arr.reduce((acc, cur) => acc + cur, 0);

	for (let i = 0; i < arr.length; i++) {
		rightSum -= arr[i];
		if (leftSum === rightSum) {
			return 'YES';
		}
		leftSum += arr[i];
	}

	return 'NO';
}

// Test Cases
let testArr: number[];

testArr = [1, 2, 3];
console.log(balancedSums(testArr) + ' | Expected: NO'); // Expected: NO

testArr = [1, 2, 3, 3];
console.log(balancedSums(testArr) + ' | Expected: YES'); // Expected: YES

testArr = [1];
console.log(balancedSums(testArr) + ' | Expected: YES'); // Expected: YES

testArr = [1, 1, 4, 1, 1];
console.log(balancedSums(testArr) + ' | Expected: YES'); // Expected: YES

testArr = [2, 0, 0, 0];
console.log(balancedSums(testArr) + ' | Expected: YES'); // Expected: YES

testArr = [0, 0, 2, 0];
console.log(balancedSums(testArr) + ' | Expected: YES'); // Expected: YES
