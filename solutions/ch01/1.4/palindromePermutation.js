/*
1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.) 
*/

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
