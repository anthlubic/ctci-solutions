const stringRotation = require('./stringRotation');

describe('1.9 - stringRotation', () => {
	it('returns true when letters are in same relative order regardless of the ends', () => {
		let first = 'waterbottle';
		let second = 'erbottlewat';
		let output = stringRotation(first, second);
		let expected = true;
		expect(expected).toEqual(output);
	});
	it('returns false when letters all match but relative order is wrong', () => {
		let first = 'waterbottle';
		let second = 'bttlewoater';
		let output = stringRotation(first, second);
		let expected = false;
		expect(expected).toEqual(output);
	});
});
