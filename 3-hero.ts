// WPU Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// export function hero(bullets: number, dragons: number) {
// 	if (bullets / 2 >= dragons) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

export const hero = (bullets: number, dragons: number): boolean =>
	2 * dragons <= bullets;

console.log(hero(10, 5));
