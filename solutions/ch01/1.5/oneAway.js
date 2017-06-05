function oneAway(str1, str2) {
	if (str1.length === str2.length) return needsOneReplace(str1, str2);
	if (str1.length + 1 === str2.length) return needsOneInsert(str1, str2);
	//just reverse the arg order, dont need to write a delete
	if (str1.length - 1 === str2.length) return needsOneInsert(str2, str1);
	return false;
}

function needsOneInsert(str1, str2) {
	let i = 0;
	let j = 0;
	let mulligan = false;
	while (i < str1.length && j < str2.length) {
		if (str1[i] !== str2[j]) {
			if (mulligan) return false;
			mulligan = true;
			j++;
		} else {
			i++;
			j++;
		}
	}
	return true;
}

function needsOneReplace(str1, str2) {
	let mulligan = false;
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) {
			if (mulligan) return false;
			mulligan = true;
		}
	}
	return true;
}

module.exports = oneAway;
