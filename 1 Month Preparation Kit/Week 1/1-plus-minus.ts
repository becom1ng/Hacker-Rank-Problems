/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
	let positive = 0;
	let negative = 0;
	let zero = 0;

	arr.forEach((x) => {
		if (x === 0) {
			zero++;
		} else if (x > 0) {
			positive++;
		} else if (x < 0) {
			negative++;
		}
	});

	let positive2 = (positive / arr.length).toFixed(6);
	let negative2 = (negative / arr.length).toFixed(6);
	let zero2 = (zero / arr.length).toFixed(6);
	console.log(positive2);
	console.log(negative2);
	console.log(zero2);
}

function main(arr: number[]) {
	plusMinus(arr);
}

main([-4, 3, -9, 0, 4, 1]);
