// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in
// ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

// Example
// grid = ['abc','ade','efg']
// The grid is illustrated below.
// a b c
// a d e
// e f g
// The rows are already in alphabetical order. The columns a a e. b d f and c e g are also in alphabetical order, so the answer would be YES.
// ? Only elements within the same row can be rearranged. They cannot be moved to a different row.

// Function Description
// gridChallenge has the following parameter(s):
//    - string grid[n]: an array of strings
// Returns
//    - string: either YES or NO

// Input Format
// The first line contains t, the number of testcases.
// Each of the next t sets of lines are described as follows:
// - The first line contains n, the number of rows and columns in the grid.
// - The next n lines contains a string of length n

// Constraints
// 1≤t<100
// 1 ≤n≤100

// Each string consists of lowercase letters in the range ascii[a-z]

// Output Format
// For each test case, on a separate line print YES if it is possible to rearrange the grid alphabetically ascending in both its rows and columns, or NO otherwise.

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid: string[]): string {
	let result: string = 'YES';

	for (let i = 0; i < grid.length; i++) {
		grid[i] = grid[i].split('').sort().join('');
	}

	for (let j = 0; j < grid.length - 1; j++) {
		if (result === 'NO') return result;
		for (let k = 0; k < grid.length; k++) {
			if (grid[j][k] > grid[j + 1][k]) {
				return (result = 'NO');
			} else {
				result = 'YES';
			}
		}
	}

	return result;
}

let testGrid: string[] = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
console.log(gridChallenge(testGrid) + ' | Expected: YES'); // Expected: YES

testGrid = ['mpxz', 'abcd', 'wlmf'];
console.log(gridChallenge(testGrid) + ' | Expected: NO'); // Expected: NO

testGrid = [
	'hichjluajsbgfluyerbxuqcyisrwhvsfjkgjmftfnwwds',
	'ygvftuwjiqnxuoqydhckbdmjdbigcrvxxwnbdjhraaovt',
	'tbpasqynfxxtuoqndokqopnnmasisvuyinjtpzuintlam',
	'uppsggunudisvimglgxpiyshpsxtiougpixwxtmujnhvs',
	'hyjhqlkuxynijsatbsplibfjhrqguxcrifkjwozrvhygm',
	'vbgmlrizvfpcsnapkfdlinpjpfhnnhepjawcubjdaumwh',
	'drsjerdprkpbmoozosrlauudlvjkyhzwcozaaotcdxgdf',
	'imnhsivtdkydditafgxpticlckhfebmyajzwpfsdztero',
	'wmptbypthvwbeuvogfrgwliqrylvjvgjwjecsxbxsprkd',
	'bnfuqtjwwkpkqcnzjzjkuvquzamtayrgiokcwstpxdvio',
	'giasjbcqasqrykgadmiromonsgvjrmibskkauiwaapntd',
	'snmkvqfrkdfqcwqdjxwbetbhoubtjbibjdqklevnpmsqt',
	'iborglcqblfaedlpheeopedygtdnxwcuwhqalmbthyajx',
	'xytthnlxiplllftbraguywkpzholqjtrinejdnvfflqhp',
	'iplqgqylvwyscvdjikubfhmlmugnwhbhzbgyaxstgwgos',
	'dyskwgtfzwbobgxznhaaodjkkgdvtighgukjepfqzbjid',
	'yafpihubvxuwyyosjjsqjxojntalvcclayxpbmndqzrrh',
	'jrkrxycelvjdpfbpvifhlhnjbminouigeviqntseytdyc',
	'gobjcgvsuviffjwhqhfepcloeocgmutkisoqoepjrnyne',
	'ynrsdnygxuzrsuyppzmfkgsyytkivvyfaicmukehrrtqy',
	'ztgfewbcozwaxfmwkexlhfdcyjqdzdrdztdqtjsqdnhuz',
	'pgafyyflkgehadnqrpdvhnlofjopezpnfkhttblawivyr',
	'senlyvrotecbsvaxartokzwduskjywqtvkuxbhrhvyxda',
	'izpliqvzbtrmyfwmpdoalirjhnkvqzznkfrwqakkargdp',
	'mhbvhdetkrvlbfqpgrmtarujaxaaagqhyjouahwjqzfae',
	'haidacbjtswiyqugwxsfkmjnfnxjwinbmomgnrkyzpydg',
	'gcvtsvfdxzwpkvxkfnrgbifegoqoqerwykzozcynfqwmd',
	'tabfyvrpkwiciazzlfvgihoywrscjydyvskoarvkghjso',
	'ldymqbqcorefyelufzvfrlbrilljhkggbfehlllrmkeoe',
	'xvqwudciztqaddiwdoymuqlxjdcgjkqmfdvciomoazwsu',
	'jshennfllugdbfvfdsejtrpykstmkycsmafqjwyzasgmd',
	'wahqewqxiaohbrlbpsvyivkamehbmpfenbdgzswcxlney',
	'iycimjjxuijsjmmmhflqrxjooftwbvuwwpediqwqgsgys',
	'veyoclvzcjyhqcvrmxspmfmponvkgcitnptnqnwmoivam',
	'rsuldjvkhsnxessoxahypiuhlozkwcwsxuaxipyuzfxrq',
	'fhteaxlzhhdvkznfojlyhkjuawonqajomzpdtwjwpjdnz',
	'ejvmqaezmhnyqtalkhnmxperkmwqsnicsiivgvdulrmjy',
	'znmzplhuykcemvurmsyzxqurvsdgfexesgndvndlisbey',
	'uiijmlntkmehejwyihldwvgqekznedoknnvcgzvwjyymm',
	'fxkmssvwcmkhvsznappctupiphxslkbttiorhifrzvjns',
	'decohqaliobjrudlfcpzmlhdfzbhtghjncbflswotaugf',
	'yjwxpjxakfjwoxobognmgsckfewhmhkehjnyngebzlold',
	'vxrjizczlrzcuinwzobmdmikuybegkcatgjcialkqkzzx',
	'fvugssimiuldjajkwcyqcxcpvwicwedzdjnqimycaeyan',
	'duattpqaupsgxymlntamuyqxalbnhrupgqlljhvlaazny',
];
console.log(gridChallenge(testGrid) + ' | Expected: NO'); // Expected: NO

testGrid = [
	'zyyyzzzzzyzzzzzzzyyyzzyzzyyzzyzzzwzyzyywz',
	'zyzyzzyzzzzzzzyzzzzzwyyzyzzzyzwzyyyyyzzzy',
	'zzzzzzzzzzzwzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zwzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'wzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzwzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzwzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzyzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyzzz',
	'zzzzzzzyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzyzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzyzzzzzzzzzzzzzzzzzzzzzzz',
	'zyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzyzzzzzzzzzzzzzzzzzzzzzzzz',
	'zyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzyzzzzzzzzzzzzzzzzz',
	'yzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
];
console.log(gridChallenge(testGrid) + ' | Expected: YES'); // Expected: YES
