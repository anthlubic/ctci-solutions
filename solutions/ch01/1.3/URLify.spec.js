const URLify = require('./URLify');

describe('1.3 - URLify', () => {
	it('replaces spaces with %20', () => {
		let input = 'Mr John Smith    ';
		let output = URLify(input);
		let expected = 'Mr%20John%20Smith';
		expect(output).toEqual(expected);
	});
});
