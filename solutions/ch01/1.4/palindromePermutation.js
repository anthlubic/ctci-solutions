function palindromePermutation(str) {
	let hashset = new Set();
	for (let letter of str) {
		if (hashset.has(letter)) {
			hashset.delete(letter);
		} else {
			hashset.add(letter);
		}
	}

	return hashset.size == str.length % 2;
}

module.exports = palindromePermutation;
