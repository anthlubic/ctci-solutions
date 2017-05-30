const checkPermutation = require('./checkPermutation');

describe('1.2 - checkPermutation', function() {
	it('returns true for "atco cat", "taco cat"', () => {
		expect(checkPermutation('atco cat', 'taco cat')).toBe(true);
	});
	it('returns false for "abcdefg", "hijk"', () => {
		expect(checkPermutation('abcdefg', 'hijk')).toBe(false);
	});
	it('returns false for "abcdefg", "hijklmn"', () => {
		expect(checkPermutation('abcdefg', 'hijklmn')).toBe(false);
	});
});
