// Given an integer n, find each x such that:
// 0 <= x <= n
// n + x = n XOR x
// where XOR denotes the bitwise XOR operator. Return the number of x's satisfying the criteria.

// Example
// n = 4
// There are four values that meet the criteria:
//    4 + 0 = 4 XOR 0 = 4
//    4 + 1 = 4 XOR 1 = 5
//    4 + 2 = 4 XOR 2 = 6
//    4 + 3 = 4 XOR 3 = 7
// Return 4.

// Function Description
// sumXor has the following parameter(s):
// - int n: an integer
// Returns
// - int: the number of values found

function sumXor(n) {
  n.toString()
	if (n == 0) {
		return 1;
	}
	return (
		2**n.toString(2).split('').filter((e) => e == '0').length
	);
}

// ! Explanation:
// So, consider this number as a binary string:
// i.e. 1001000110100
// All of the numbers that will satisfy the condition, is any number
// that has zeros where the ones are in the string.

// You can see that this is the case if you consider a single bit.
// In the case of 1:
//   1 + 1 = 10 while 1 + 0 = 1
//   1 ^ 1 = 0 while 1 ^ 0 = 1.
//   So, in the case of one as operand, you get the same value,
//   only when you add / xor 0 to it.
// In the case of 0:
//   0 + 0 = 0 while 0 + 1 = 1
//   0 ^ 0 = 0 while 0 ^ 1 = 1
//   So in the case of zero as operand,
//   you get the same value when you
//   add / xor either value (0 or 1) to it

// So the numbers that will work with
// 1001000110100 are:
// 0**0***00*0**
// where * can be either a zero or a one.

// To calculate the number of permutations:
// Take the number of options (zero or one, so two)
// to the power of the number of times that option
// can be taken, which is the number of zeros in the
// binary string of the original number, n.

// The exception here is zero, which has one option
