const isUnique = require('./isunique');

describe('1.1 - isUnique', function() {
	it('returns true on abcdefg', () => {
		expect(isUnique('abcdefg')).toBe(true);
	});

	it('returns false on racecar', () => {
		expect(isUnique('racecar')).toBe(false);
	});
});
