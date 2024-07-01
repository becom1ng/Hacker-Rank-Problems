// A teacher asks the class to open their books to a page number.
// A student can either start turning pages from the front of the book or from the back of the book
// They always turn pages one at a time. When they open the book, page 1 is always on the right side.

// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

// pageCount has the following parameter(s):
//      int n: the number of pages in the book
//      int p: the page number to turn to

function pageCount(n: number, p: number): number {
	// Write your code here
	let result: number = 0;
	let totalPageTurns: number = Math.floor(n / 2);
	let fromStart: number = Math.floor(p / 2);
	let fromEnd: number = totalPageTurns - fromStart;
	result = Math.min(fromStart, fromEnd);

	// return Math.min(
	// 	Math.ceil((p - 1) / 2),
	// 	n % 2 == 0 ? Math.floor((n - p) / 2) + 1 : Math.floor((n - p) / 2),
	// );

	return result;
}

let numPages = 5;
let pageGoal = 3;
console.log(pageCount(numPages, pageGoal), ' | Expected 1'); // Expected 1

numPages = 6;
pageGoal = 2;
console.log(pageCount(numPages, pageGoal), ' | Expected 1'); // Expected 1

numPages = 5;
pageGoal = 4;
console.log(pageCount(numPages, pageGoal), ' | Expected 0'); // Expected 0

numPages = 6;
pageGoal = 5;
console.log(pageCount(numPages, pageGoal), ' | Expected 1'); // Expected 1
