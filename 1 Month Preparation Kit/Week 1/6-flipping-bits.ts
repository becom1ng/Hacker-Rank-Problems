/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

// You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.
//
// ? Example:
// ? n = 9 (base 10) = 1001 (base 2)
//
// ? We're working with 32 bits, so:
// ? 00000000000000000000000000001001 (base 2) = 9 (base 10)
// ? 11111111111111111111111111110110 (base 2) = 4294967286 (base 10)
// ? return 4294967286

function flippingBits(n: number): number {
	return ~n >>> 0;
}

console.log(flippingBits(2147483647)); // 2147483648
console.log(flippingBits(1)); // 4294967294
console.log(flippingBits(0)); // 4294967295
