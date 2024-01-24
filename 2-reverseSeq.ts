// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// export const reverseSeq = (n: number): number[] => {
// 	const result: any[] = [];

// 	for (let i = n; i >= 1; i--) {
// 		result.push(i);
// 	}

// 	return result;
// };

//export const reverseSeq = (n: number): number[] => Array.from({length: n}, () => n--);

export const reverseSeq = (n: number): number[] =>
	[...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
