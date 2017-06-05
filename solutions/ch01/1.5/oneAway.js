function oneAway(str1, str2) {
	let changes = countInserts(str1, str2);
	changes += countDeletes(str1, str2);
	if (changes > 1) return false;

	for (let i = str1.length; i > 0; i--) {
		console.log(str1, str2);
		let pos = str2.indexOf(str1[i]);
		str1 = str1.slice(0, i) + str1.slice(i + 1, str1.length);
		if (pos === -1) continue;
		str2 = str2.slice(0, pos) + str2.slice(pos + 1, str2.length);
	}

	return changes <= 1;
}

function countInserts(str1, str2) {
	let diff = str1.length - str2.length;
	return diff < 0 ? 0 : diff;
}

function countDeletes(str1, str2) {
	let diff = str2.length - str1.length;
	return diff < 0 ? 0 : diff;
}

module.exports = oneAway;
