import store from './store.js';

export const lookUpByName = (name) => store.filter(
	(v) => v.name === name || v.name.indexOf(name) > -1
)
