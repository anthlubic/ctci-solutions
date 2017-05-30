/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? 
*/

function isUnique(str) {
	if (str.length > 256) return false;

	let checker = 0;
	let lowerStr = str.toLowerCase();

	for (let letter of lowerStr) {
		let bit = 1 << letter.charCodeAt(0);
		if ((checker & bit) != 0) {
			return false;
		} else {
			checker = checker | bit;
		}
	}

	return true;
}

module.exports = isUnique;
