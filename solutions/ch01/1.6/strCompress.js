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
