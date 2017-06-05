/*
1.6 String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/

function strCompress(str) {
	if (!str || !str.length) return str;

	let compressed = '';
	let count = 0;
	let current = str[0];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === current) {
			count += 1;
		} else {
			compressed = compressed + current + count;
			current = str[i];
			count = 1;
		}
	}
	//flush remaining buffer;
	compressed = compressed + current + count;
	if (compressed.length >= str.length) return str;
	return compressed;
}

module.exports = strCompress;
