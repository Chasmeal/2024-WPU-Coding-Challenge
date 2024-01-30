// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// export const zeroFuel = (
// 	distance: number,
// 	mpg: number,
// 	fuelLeft: number
// ): boolean => {
// 	return distance / mpg <= fuelLeft;
// 	throw new Error('Not implemented');
// };

export const zeroFuel = (
	distance: number,
	mpg: number,
	fuelLeft: number
): boolean => distance / mpg <= fuelLeft;

console.log(zeroFuel(100, 50, 1));
