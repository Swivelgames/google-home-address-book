import store from './store.js';

export const lookUpByName = (name) => store.filter((v) =>
	v.name.toLowerCase() === name.toLowerCase() ||
	v.name.toLowerCase().indexOf(name.toLowerCase()) > -1
);

export const addNew = (pkg) => {
	try {
		store.push(Object.assign({
			name: 'not set',
			phone: 'not set',
			address: 'not set',
			email: 'not set'
		}, pkg));
		return true;
	} catch(e) { }
	return false;
}

export const set = (name, pkg) => {
	try {
		Object.assign(store.find(v => v.name === name), pkg);
		return true;
	} catch(e) { }
	return false;
}

export const count = () => store.length;
