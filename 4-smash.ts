// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// export function smash(words: string[]): string {
// 	return words.join(' ');
// }

// const smash = (words: string[]): string => words.join(' ');

export function smash(words: string[]): string {
	let result = '';
	for (let i: number = 0; i < words.length; i++) {
		if (i != words.length - 1) {
			result += words[i] + ' ';
		} else if (i == words.length - 1) {
			result += words[i];
		}
	}
	return result;
}

console.log(smash(['this', 'is', 'a', 'really', 'long', 'sentence']));
