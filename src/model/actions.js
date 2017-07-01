import store from './store.js';

export const lookUpByName = (name) => store.filter((v) =>
	v.name.toLowerCase() === name.toLowerCase() ||
	v.name.toLowerCase().indexOf(name.toLowerCase()) > -1
);

export const count = () => store.length;
