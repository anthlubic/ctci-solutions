/*
1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").
*/

function stringRotation(first, second) {
	//have to be equal
	if (first.length !== second.length) return false;

	let fullRotation = first + first;
	return fullRotation.indexOf(second) >= 0;
}

module.exports = stringRotation;
