/*
1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith" 
*/

function URLify(str) {
	let trimmed = removeTrailingWhitespace(str);
	return trimmed.replace(new RegExp(' ', 'g'), '%20');
}

function removeTrailingWhitespace(str) {
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] !== ' ') {
			return str.slice(0, i + 1);
		}
	}
	return str;
}

module.exports = URLify;
