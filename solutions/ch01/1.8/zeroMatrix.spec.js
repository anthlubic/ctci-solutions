const zeroMatrix = require('./zeroMatrix');

describe('1.8 - zeroMatrix', () => {
	it('should zero the row and col when it finds a zero', () => {
		let input = [[0, 1, 2], [5, 1, 3], [9, 5, 5]];
		let output = zeroMatrix(input);
		let expected = [[0, 0, 0], [0, 1, 3], [0, 5, 5]];
		expect(expected).toEqual(output);
	});
	it('should handle multiple zeroes in a row', () => {
		let input = [[0, 1, 0], [5, 1, 3], [9, 5, 5]];
		let output = zeroMatrix(input);
		let expected = [[0, 0, 0], [0, 1, 0], [0, 5, 0]];
		expect(expected).toEqual(output);
	});
});
