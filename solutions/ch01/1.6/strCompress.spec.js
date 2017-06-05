const strCompress = require('./strCompress');

describe('1.6 - strCompress', () => {
	it('adds the correct count next to each letter', () => {
		expect(strCompress('aaaabbbbbc')).toBe('a4b5c1');
	});
	it('handles duplicates', () => {
		expect(strCompress('aaabbbaaaacc')).toBe('a3b3a4c2');
	});
	it('returns original str when result isnt smaller', () => {
		expect(strCompress('abcdefg')).toBe('abcdefg');
	});
});
