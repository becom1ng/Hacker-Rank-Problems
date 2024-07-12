// Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2. If it is, they divide it by 2.
// If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to I wins the game. Louise always starts.

// Given an initial value, determine who wins the game.

// Example
// n = 132
// It's Louise's turn first. She determines that 132 is not a power of 2. The next lower power of 2 is 128, so she subtracts that from 132 and
// passes 4 to Richard. 4 is a power of 2, so Richard divides it by 2 and passes 2 to Louise. Likewise, 2 is a power so she divides it by 2 and
// reaches 1. She wins the game.

// Note: If they initially set counter to 1, Richard wins. Louise cannot make a move so she loses.

// Function Description
// counterGame has the following parameter(s):
// • int n: the initial game counter value
// Returns
// • string: either Richard or Louise

function counterGame(n: number): string {
	let turns: number = 0;

	if (n === 1) return 'Richard';

	while (n > 1) {
		if (Math.log2(n) % 1 === 0) {
			n /= 2;
		} else {
			n -= Math.pow(2, Math.floor(Math.log2(n)));
		}
		turns++;
	}

	return turns % 2 === 0 ? 'Richard' : 'Louise';

	// ! Alternative binary solution from discussion
	// const binaryN = n.toString(2);
	// const noOfZerosToTheRight = binaryN.split('1').pop().length;
	// const noOfOnes = binaryN.match(/1/g).length;
	// console.log(noOfZerosToTheRight, noOfOnes);
	// if(!((noOfZerosToTheRight + noOfOnes) % 2)){
	//     return 'Louise';
	// }
	// return 'Richard';

	// Explanation: Looking at the numbers in their binary form, I realised that the number of turns is equal to the total number of 1's added to the number of 0's to the right of the last 1. This is because substracting the closest power of two is basically removing the first 1, and this action has to be repeated until only the leftmost 1 remains, which will finally be a direct power of 2; then, dividing by 2 is equivalent to moving that 1 to the right, one 0 at a time, until it reaches the end.
}

// Test cases
let nCounterGame: number = 6;
console.log(counterGame(nCounterGame) + ' | Expected: Richard'); // Expected: Richard

nCounterGame = 132;
console.log(counterGame(nCounterGame) + ' | Expected: Louise'); // Expected: Louise

nCounterGame = 1;
console.log(counterGame(nCounterGame) + ' | Expected: Richard'); // Expected: Richard
