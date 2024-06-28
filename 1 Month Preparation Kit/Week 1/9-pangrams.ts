// A pangram is a string that contains every letter of the alphabet
// Given a sentence determine whether it is a pangram in the English alphabet. Ignore case.
// Return either pangram or not pangram as appropriate.

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s: string): string {
	let test: boolean = true;
	let alphabet: string[] = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	s = s.replace(/[^a-zA-Z]+/g, '').toLowerCase();

	alphabet.forEach((letter) => {
		if (s.indexOf(letter) === -1) {
			test = false;
			return;
		}
	});

	return test ? 'pangram' : 'not pangram';
}

let isPan: string =
	'We promptly judged antique ivory buckles for the next prize _9    #$@#%^e.';
let notPan: string =
	'We promptly judged antique ivory buckles for the next pri#$@#%^e _9.';
console.log(pangrams(isPan));
console.log(pangrams2(isPan));
console.log(pangrams(notPan));
console.log(pangrams2(notPan));

// ! More efficient soluition from discussion
function pangrams2(s: string): string {
	let a = new Set(s.replace(/[^a-zA-Z]+/g, '').toLowerCase());
	return a.size === 26 ? 'pangram' : 'not pangram';
}
