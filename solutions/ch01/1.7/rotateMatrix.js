/*
1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

function rotateMatrix(matrix) {
	//matrix has to be an array of arrays and it must be NxN.
	if (!Array.isArray(matrix) || matrix.length === 0 || matrix.length !== matrix[0].length) {
		throw new Error('Matrix must be an array of arrays and be NxN (a square)');
	}

	let size = matrix.length;

	for (let layer = 0; layer < size / 2; ++layer) {
		let first = layer;
		let last = size - 1 - layer;
		
		for (let i = first; i < last; ++i) {
			let offset = i - first;
			let top = matrix[first][i];

			matrix[first][i] = matrix[last - offset][first];

			matrix[last - offset][first] = matrix[last][last - offset];

			matrix[last][last - offset] = matrix[i][last];

			matrix[i][last] = top;
		}
	}

	return matrix;
}

module.exports = rotateMatrix;
