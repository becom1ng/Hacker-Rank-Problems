// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Ex:
// strings = ['ab, 'ab, 'abc']
// queries = ['ab', 'abc', 'bc']
//
// There are 2 instances of 'ab', 1 of 'abc', and 0 of 'bc'.
// For each query, add an element to the return array. *** results = [2, 1, 0] ***

// The function must return an array of integers representing the frequency of occurrence of each QUERY string in STRINGS.
// matchingStrings has the following parameters:
//     string strings[n] - an array of strings to search
//     string queries[q] - an array of query strings
// Returns
// int[q]: an array of results for each query

function matchingStrings(strings: string[], queries: string[]): number[] {
	let result: number[] = [];

	result = queries.map((q) => strings.filter((s) => s === q).length);

	return result;
}

const strings: string[] = ['aba', 'baba', 'aba', 'xzxb'];
const queries: string[] = ['aba', 'xzxb', 'ab'];

console.log(matchingStrings(strings, queries));
