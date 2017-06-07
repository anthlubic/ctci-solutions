const rotateMatrix = require('./rotateMatrix');

describe('1.7 - rotateMatrix', () => {
	it('should rotate odd-n matrices clockwise', () => {
		let input = [
			['A', 'B', 'C'], 
			['D', 'E', 'F'], 
			['G', 'H', 'I']
		];
		let output = rotateMatrix(input);
		let expected = [
			['G', 'D', 'A'], 
			['H', 'E', 'B'], 
			['I', 'F', 'C']
		];
		expect(expected).toEqual(output);
	});
	it('should rotate even-n matrices clockwise', () => {
		let input = [
			[1, 2, 3, 4], 
			[5, 6, 7, 8], 
			[9, 10, 11, 12],
			[13, 14, 15, 16]
		];
		let output = rotateMatrix(input);
		let expected = [
			[13, 9, 5, 1],
			[14, 10, 6, 2],
			[15, 11, 7, 3],
			[16, 12, 8, 4]
		];
		expect(expected).toEqual(output);
	});
});
