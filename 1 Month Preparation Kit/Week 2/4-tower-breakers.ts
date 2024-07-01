/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n = number of towers
 *  2. INTEGER m = height of each tower
 */

// Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.
// The rules of the game are as follows:
//    Initially there are N towers.
//    Each tower is of height M.
//    The players move in alternating turns.
// !  In each turn, a player can choose a tower of height X and reduce its height to Y, where 1 <= Y < X and Y evenly divides X.
//    If the current player is unable to make a move, they lose the game.

// Given the values of N and M, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

function towerBreakers(n: number, m: number): number {
	// Write your code here

	// If all towers are height 1, P1 can never make a move => P2 wins.
	// If all towers are even, then P1 will reduce by half. This is mimiced by P2 until all towers are height 1 at the end of P2's turn, leaving no move for P1.
	if (n % 2 == 0 || m == 1) return 2;

	// P1 wins in all other scenarios.
	return 1;
}

let numTowers: number = 2;
let height: number = 2;
console.log(towerBreakers(numTowers, height)); // Expected 2

numTowers = 1;
height = 4;
console.log(towerBreakers(numTowers, height)); // Expected 1
