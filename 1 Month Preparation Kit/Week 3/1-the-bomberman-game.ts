// Bomberman lives in a rectangular grid. Each cell in the grid either contains a bomb or nothing at all.
// Each bomb can be planted in any cell of the grid but once planted, it will detonate after exactly 3 seconds. Once a bomb detonates, it's
// destroyed — along with anything in its four neighboring cells. This means that if a bomb detonates in cell i, j, any valid cells (i ± 1, j)
// and (i, j ± 1) are cleared. If there is a bomb in a neighboring cell, the neighboring bomb is destroyed without detonating, so there's no
// chain reaction.

// Bomberman is immune to bombs, so he can move freely throughout the grid. Here's what he does:
// 1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
// 2. After one second, Bomberman does nothing.
// 3. After one more second, Bomberman plants bombs in all cells without bombs, thus filling the whole grid with bombs. No bombs
// detonate at this point.
// 4. After one more second, any bombs planted exactly three seconds ago will detonate. Here, Bomberman stands back and observes.
// 5. Bomberman then repeats steps 3 and 4 indefinitely.

// Note that during every second Bomberman plants bombs, the bombs are planted simultaneously (i.e., at the exact same moment), and
// any bombs planted at the same time will detonate at the same time.
// Given the initial configuration of the grid with the locations of Bomberman's first batch of planted bombs, determine the state of the grid
// after N seconds.

// For example, if the initial grid looks like:
// . . .
// . O .
// . . .
//  grid[3] = ["...", ".O.", "..."];
// it looks the same after the first second.
// After the second second, Bomberman has placed all his charges:
// O O O
// O O O
// O O O
// At the third second, the bomb in the middle blows up. emptying all surrounding cells:
// O . O
// . . .
// O . O

// Function Description
// bomberMan has the following parameter(s):
// 	• int n: the number of seconds to simulate
// 	• string grid[r]: an array of strings that represents the grid
// Returns
// 	• string[r]: n array of strings that represent the grid in its final state

// States:
// 0 = INIT: initial state
// 1 = INIT: initial state
// 2 = BOMBS: filled with bombs
// 3 = X1: INIT state bombs explode (all other non-adjacent filled with bombs)
// 4 = BOMBS: filled with bombs
// 5 = X2: X1 state bombs explode (all other non-adjacent filled with bombs)
// 6 = BOMBS: filled with bombs
// 7 = X3 (same as X1): X2 state bombs explode (all other non-adjacent filled with bombs)
// 8 = BOMBS: filled with bombs
// 9 = X4 (same as X2): X3 state bombs explode (all other non-adjacent filled with bombs)

// if a bomb detonates in cell i, j, any valid cells (i ± 1, j) and (i, j ± 1) are cleared.
// If there is a bomb in a neighboring cell, the neighboring bomb is destroyed without detonating

function bomberMan(n: number, grid: string[]): string[] {
	// Write your code here
	let result: string[] = [];

	// nothing happens
	if (n < 2) {
		return grid;
	}

	const state = n % 4;

	// filled with bombs on all even numbers
	if (state === 0 || state === 2) {
		return grid.fill('O'.repeat(grid[0].length));
	}

	//

	return result;
}

// Test Cases
let grid_Week3Prob1 = [
	'.......',
	'...O...',
	'....O..',
	'.......',
	'OO.....',
	'OO.....',
];
let n_Week3Prob1 = 1;
console.log(bomberMan(n_Week3Prob1, grid_Week3Prob1)); // Expected Output: ['.......','...O...','....O..','.......','OO.....','OO.....',]

n_Week3Prob1 = 2;
console.log(bomberMan(n_Week3Prob1, grid_Week3Prob1)); // Expected Output: ['OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO']
n_Week3Prob1 = 4;
console.log(bomberMan(n_Week3Prob1, grid_Week3Prob1)); // Expected Output: ['OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO']
// n_Week3Prob1 = 3;
// console.log(bomberMan(n_Week3Prob1, grid_Week3Prob1)); // Expected Output: ['OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO']
// n_Week3Prob1 = 5;
// console.log(bomberMan(n_Week3Prob1, grid_Week3Prob1)); // Expected Output: ['OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO','OOOOOOO']

// STDIN           Function
// -----           --------
// 6 7 3           r = 6, c = 7, n = 3
// .......         grid =['.......', '...O...', '....O..',
// ...O...                '.......', 'OO.....', 'OO.....']
// ....O..
// .......
// OO.....
// OO.....

// Explanation

// The initial state of the grid is:
// .......
// ...O...
// ....O..
// .......
// OO.....
// OO.....

// n = 1 Bomberman spends the first second doing nothing, so this is the state after 1 second:
// .......
// ...O...
// ....O..
// .......
// OO.....
// OO.....

// n = 2 Bomberman plants bombs in all the empty cells during his second second, so this is the state after 2 seconds:
// OOOOOOO
// OOOOOOO
// OOOOOOO
// OOOOOOO
// OOOOOOO
// OOOOOOO

// n = 3 In his third second, Bomberman sits back and watches all the bombs he planted 3 seconds ago detonate.
// This is the final state after 3 seconds:
// OOO.OOO
// OO...OO
// OOO...O
// ..OO.OO
// ...OOOO
// ...OOOO

// n = 0 or 1:	grid = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']
// n = 3: 			grid = ['OOO.OOO', 'OO...OO', 'OOO...O', '..OO.OO', '...OOOO', '...OOOO']
// n = 5:				grid = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'] = initial state???
// .......
// ...O...
// ....O..
// .......
// OO.....
// OO.....
// n = 7:				grid = ['OOO.OOO', 'OO...OO', 'OOO...O', '..OO.OO', '...OOOO', '...OOOO'] = n = 3 state
// OOO.OOO
// OO...OO
// OOO...O
// ..OO.OO
// ...OOOO
// ...OOOO

// if a bomb detonates in cell i, j, any valid cells (i ± 1, j) and (i, j ± 1) are cleared.
