function checkPermutation(firstStr, secondStr) {
	if (firstStr.length !== secondStr.length) return false;

	let arr1 = firstStr.split('');
	let arr2 = secondStr.split('');
	for (let letter of arr1) {
		let pos = arr2.indexOf(letter);
		if (pos === -1) return false;
		arr2[pos] = undefined;
	}

	return true;
}

module.exports = checkPermutation;
