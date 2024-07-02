// Flipping the Matrix

// Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of
// times. The goal of the game is to maximize the sum of the elements in the n X n submatrix located in the upper-left quadrant of the matrix.
// Given the initial configurations for q matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements
// in the matrix's upper-left quadrant is maximal.
// Example
// matrix = [[1, 2], [3, 4]]

// 1 2
// 3 4

// It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1:

// 1 2
// 4 3

// And now reverse column 0:

// 4 2
// 1 3

// The maximal sum is 4.

// Function Description
// flippingMatrix has the following parameters:
// - int matrix[2n][2n]: a 2-dimensional array of integers
// Returns
// - int: the maximum sum possible.

// Input Format
// The first line contains an integer q, the number of queries.
// The next q sets of lines are in the following format:

// . The first line of each query contains an integer, n.

// . Each of the next 2n lines contains 2n space-separated integers matrix[]] in row i of the matrix.

// Constraints

// · 1 ≤ q ≤ 16

// · 1 ≤n ≤128
// · 0 ≤ matrix[i][j] ≤ 4096, where 0≤i,j<2n.

// ! If it helps: Don't think about flipping the rows and columns... There are too many possible outcomes.
// ! Instead, think about what values you can get into the different places.
// ! For example, in (0,0) you can get any of the 4 corners. Keep that pattern going and you should start to see a pretty simple algorithm present itself.

function flippingMatrix(matrix: number[][]): number {
	// Write your code here
	let result = 0;
	let n = matrix.length / 2;

	for (let row = 0; row < n; row++) {
		for (let col = 0; col < n; col++) {
			let max = 0;
			max = Math.max(matrix[row][col], max);
			max = Math.max(matrix[row][2 * n - col - 1], max);
			max = Math.max(matrix[2 * n - row - 1][col], max);
			max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max);

			console.log('Max: ' + max + ' Result: ' + result);
			result += max;
		}
	}

	return result;
}

let testMatrix = [
	[112, 42, 83, 119],
	[56, 125, 56, 49],
	[15, 78, 101, 43],
	[62, 98, 114, 108],
]; // Expected 414

console.log(flippingMatrix(testMatrix));
