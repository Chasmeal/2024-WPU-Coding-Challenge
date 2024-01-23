// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x) {
// 	let result = x[0];

// 	for (let i = 1; i < x.length; i++) {
// 		result *= x[i];
// 	}
// 	return result;
// }

export const grow = (arr: number[]): number => {
	return arr.reduce((acc, curr) => acc * curr);
};

console.log(grow([1, 2, 3, 4]));
