// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
	let timeString: string = s.slice(0, -2) + ' ' + s.slice(-2);
	let date = new Date(`01/01/2022 ${timeString}`);
	let formattedTime = date.toLocaleTimeString('en-US', { hourCycle: 'h23' });
	return formattedTime;
}

console.log(timeConversion('07:05:45AM'));
console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('12:05:45AM'));
console.log(timeConversion('01:05:45PM'));
