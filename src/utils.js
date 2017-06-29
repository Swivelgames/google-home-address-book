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
