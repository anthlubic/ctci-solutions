const palindromePermutation = require('./palindromePermutation');

describe('1.4 - palindromePermutation', () => {
	it('"rrccaae" returns true', () => {
		let test = 'rrccaae';
		expect(palindromePermutation(test)).toBe(true);
	});

	it('"abbba" returns true', () => {
		let test = 'abbba';
		expect(palindromePermutation(test)).toBe(true);
	});

	it('"abcdef" returns false', () => {
		let test = 'abcdef';
		expect(palindromePermutation(test)).toBe(false);
	});

	it('"aabbccdd" returns true', () => {
		let test = 'aabbccdd';
		expect(palindromePermutation(test)).toBe(true);
	});
});
