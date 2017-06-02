const oneAway = require('./oneAway');

describe('1.5 - oneAway', () => {
	it('returns true when 1 insert is required', () => {
		let str1 = 'pale';
		let str2 = 'ple';
		expect(oneAway(str1, str2)).toBe(true);
	});
	it('returns true when only 1 delete is required', () => {
		let str1 = 'pales';
		let str2 = 'pale';
		expect(oneAway(str1, str2)).toBe(true);
	});
	it('returns true when 1 update is required', () => {
		let str1 = 'pale';
		let str2 = 'bale';
		expect(oneAway(str1, str2)).toBe(true);
	});
	it('returns false when more than 1 insert/delete/update is required', () => {
		let str1 = 'pale';
		let str2 = 'bake';
		expect(oneAway(str1, str2)).toBe(false);
	});
});
