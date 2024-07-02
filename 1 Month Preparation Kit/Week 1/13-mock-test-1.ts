function findMedian(arr: number[]): number {
	// Write your code here
	arr.sort((a, b) => a - b);
	return arr[Math.floor(arr.length / 2)];
}
