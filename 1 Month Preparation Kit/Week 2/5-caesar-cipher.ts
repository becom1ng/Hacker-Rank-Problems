/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s - the unencrypted string.
 *  2. INTEGER k - the number of letters to rotate the alphabet by
 */

// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c

// Function Description
// caesarCipher has the following parameter(s):
//      string s: cleartext
//      int k: the alphabet rotation factor
// Returns
//      string: the encrypted string

// ! Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

function caesarCipher(s: string, k: number): string {
	// Write your code here
	let result: string = '';

	const alpha: string = 'abcdefghijklmnopqrstuvwxyz';

	for (const letter of s) {
		let isCap = /[A-Z]/.test(letter);
		let index = alpha.indexOf(letter.toLowerCase());

		if (index === -1) {
			result += letter;
			continue;
		} else {
			index = (index + k) % 26;
			isCap ? (result += alpha[index].toUpperCase()) : (result += alpha[index]);
		}
	}

	return result;
}

let text = 'middle-Outz';
let shift = 2;
console.log(caesarCipher(text, shift), '\nokffng-Qwvb | Expected'); // Expected: okffng-Qwvb

text = `There's-a-starman-waiting-in-the-sky`;
shift = 3;
console.log(
	`${caesarCipher(
		text,
		shift,
	)}\nWkhuh'v-d-vwdupdq-zdkwkqj-lq-wkh-vnb  | Expected`,
); // Expected: Wkhuh'v-d-vwdupdq-zdkwkqj-lq-wkh-vnb
