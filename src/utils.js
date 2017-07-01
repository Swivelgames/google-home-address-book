import fieldNameMap from './lang/en-US/_fieldNameMap.js';

export const determineFieldKey = (phrase) => {
	const keys = Object.keys(fieldNameMap);

	for(let key of keys) {
		if (phrase.indexOf(key) > -1) return key;
		const variants = fieldNameMap[key];
		for(let v of variants) {
			if (phrase === v) return key;
			else if (v[0] === "*" && phrase.indexOf(v.replace('*')) > -1) return key;
		}
	}

	return void 0;
}

export const doesRawMatchQuery = (phrase, pattern) => {
	const cleanPattern = pattern.replace(/[^\w\s$]+/ig,' ').toLowerCase();
	const cleanPhrase = phrase.replace(/[^\w\s]+/ig,' ').toLowerCase();

	const phraseArr = cleanPhrase.split(/\s+/);
	const patternArr = cleanPattern.split(/\s+/);

	const args = {};
	for(var i in patternArr) {
		const v = patternArr[i];
		if (v[0] === '$') args[v.substr(1)] = phraseArr[i];
		else if (v !== phraseArr[i]) return false;
	}
	return args;
}
