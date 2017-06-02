function oneAway(str1, str2) {
	let diff = Math.abs(str1.length - str2.length);
	if (diff > 1) return false;

	let map1 = buildCounts(str1.split(''));
	let map2 = buildCounts(str2.split(''));
	let changes = 0;
	for (let letter of arr1) {
		let pos = arr2.indexOf(letter);
		if (pos === -1) return false;
		arr2[pos] = null;
		changes += 1;
	}

	return changes <= 1;
}

function buildCounts(arr); {
  let map = {};
  for (let item of arr) {
    map[item] = map[item] || 1;
  }
  return map;
}

module.exports = oneAway;
