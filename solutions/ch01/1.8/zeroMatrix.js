/*
1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.
*/

/*
  My mental notes:
  loop through each row in the matrix

    - if we find a zero
      - add to a zero-tracking hashset
      - zero the whole row
      - move onto next row
    - if this index is in the zero-tracking hashset
      - set to zero and move on
  //this fails if theres multiple zeroes in a row.
  //need to finish out the row and rely on the zeroes set??
*/

function zeroMatrix(matrix) {
	let zeroes = new Set();
	for (let row = 0; row < matrix.length; row++) {
		let zeroRow = false;
		let currentRow = matrix[row];
		for (let col = 0; col < currentRow.length; col++) {
			if (currentRow[col] === 0) {
				zeroes.add(col);
				zeroRow = true;
			}
			if (zeroes.has(col)) {
				currentRow[col] = 0;
			}
		}
		if (zeroRow) {
			matrix[row] = currentRow.map(e => 0);
		}
	}
	return matrix;
}

module.exports = zeroMatrix;
